const fs = require('fs')
const path = require('path')
const ora = require('ora')
const { cosmiconfigSync } = require('cosmiconfig')
const COS = require('cos-nodejs-sdk-v5')

const config = require('./config')
const pkg = require('../package.json')

module.exports = (input, options) => {
  options = Object.assign({}, options)

  if (!['delete', 'upload', 'init'].includes(input)) {
    throw new Error('Command does not exist！')
  }

  const explorer = cosmiconfigSync(pkg.name)
  let { config = {} } = explorer.search(process.cwd()) || {}

  config = Object.assign({}, config, options)

  const cos = new COS({
    SecretId: config.sid,
    SecretKey: config.sk
  })

  commands[input](cos, config)
}

const commands = {
  init: () => {
    const rcName = `.${pkg.name}.js`

    fs.access(path.resolve(rcName), fs.F_OK, (err) => {
      if (err) {
        fs.writeFileSync(path.resolve(rcName), 'module.exports = ' + JSON.stringify(config, null, 2))
        console.log('Create .cosdeployrc.js file success！')
      } else {
        console.log('.cosdeployrc.js is exist！')
      }
    })
  },
  delete: async (cos, { bucket, region, dir }) => {
    const spinner = ora(`开始检查${dir}目录`).start()
    const bucketRes = await cos.getBucket({
      Bucket: bucket,
      Region: region,
      Prefix: dir
    })

    if (bucketRes.Contents.length === 0) {
      spinner.succeed(`${dir}不存在，直接开始上传`)
      return
    } else {
      spinner.text = `${dir}存在其他文件，开始删除文件`
    }

    const keys = bucketRes.Contents.map(item => {
      return {
        Key: item.Key
      }
    })

    cos.deleteMultipleObject({
      Bucket: bucket,
      Region: region,
      Objects: keys
    }, (err, res) => {
      if (err) {
        spinner.fail('文件删除失败：' + err.error.Message)
        return Promise.reject(console.error(err))
      }
      spinner.succeed(`${dir}删除成功，共${res.Deleted.length}个文件`)
    })
  },
  async upload (cos, config) {
    const fileList = []
    const { dist, bucket, region, dir, del } = config

    console.log(config)
    const readFile = (filePath) => {
      const files = fs.readdirSync(path.resolve(filePath))

      files.forEach(async file => {
        const abFile = `${filePath}/${file}`
        const stat = fs.statSync(abFile)
        if (stat.isDirectory()) {
          readFile(abFile)
        } else {
          fileList.push({
            Bucket: bucket,
            Region: region,
            Key: `${dir}${abFile.substr(dist.length)}`,
            FilePath: path.resolve(abFile)
          })
        }
      })
    }

    readFile(dist)

    if (del) {
      await this.delete(cos, config)
    }
    const spinner = ora('开始上传').start()
    const start = new Date()
    cos.uploadFiles({
      files: fileList,
      SliceSize: 1024 * 1024,
      onProgress: (info) => {
        const percent = parseInt(info.percent * 10000) / 100
        const speed = parseInt(info.speed / 1024 / 1024 * 100) / 100
        spinner.color = 'green'
        spinner.text = '进度：' + percent + '%; 速度：' + speed + 'Mb/s;'
      }
    }, (err, data) => {
      if (err) {
        spinner.fail(err + '上传失败')
        return
      }
      spinner.succeed(`${data.files.length}个文件上传成功，耗时${(
        new Date() - start
      ) / 1000}秒`)
    })
  }
}
