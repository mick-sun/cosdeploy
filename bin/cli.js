#!/usr/bin/env node

const cac = require('cac')
const cosdeploy = require('..')
const { name, version } = require('../package')

// Unified error handling
/* istanbul ignore next */
const onError = err => {
  console.error(err.message)
  process.exit(1)
}

process.on('uncaughtException', onError)
process.on('unhandledRejection', onError)

const cli = cac(name)

// TODO: Implement module cli

cli
  .command('<input>', 'init or delete or upload')
  .option('--sid <sid>', '用户的 SecretId')
  .option('--sk <sk>', '用户的 SecretKey')
  .option('--dir <dir>', '要上传的COS目录')
  .option('--bucket <bucket>', '存储桶的名称')
  .option('--region <region>', '存储桶所在地域')
  .option('--domain <domain>', '调用操作存储桶和对象的 API 时自定义请求域名')
  .option('--dist <dist>', '本地目录')
  .option('--del', '上传之前是否清空之前的版本')
  .example('$ cosdeploy upload --dir test')
  .action((input, options) => {
    cosdeploy(input, options)
  })

cli.help().version(version).parse()
