# cosdeploy

[![Build Status][travis-img]][travis-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> 静态网站上传COS CLI

## Installation

```shell
$ npm install cosdeploy

# or yarn
$ yarn add cosdeploy
```

## CLI Usage
Use npx:

```shell
$ npx cosdeploy <input> [options]
```

Globally install:

```shell
$ npm install cosdeploy -g
# or yarn
$ yarn global add cosdeploy
```

```shell
$ cosdeploy --help
demo v0.1.0

Usage:
  $ cosdeploy <input>

Commands:
  <input>  init | delete | upload

For more info, run any command with the `--help` flag:
  $ cosdeploy --help

Options:
  --sid <sid>        用户的 SecretId 
  --sk <sk>          用户的 SecretKey 
  --dir <dir>        要上传的COS目录 
  --bucket <bucket>  存储桶的名称 
  --region <region>  存储桶所在地域 
  --domain <domain>  调用操作存储桶和对象的 API 时自定义请求域名 
  --dist <dist>      本地目录 
  --del              上传之前是否清空之前的版本 
  -h, --help         Display this message 
  -v, --version      Display version number 

Examples:
  $ cosdeploy upload --del
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [Mick](https://github.com/mick-sun)



[travis-img]: https://img.shields.io/travis/com/mick-sun/cosdeploy
[travis-url]: https://travis-ci.com/mick-sun/cosdeploy
[codecov-img]: https://img.shields.io/codecov/c/github/mick-sun/cosdeploy
[codecov-url]: https://codecov.io/gh/mick-sun/cosdeploy
[license-img]: https://img.shields.io/github/license/mick-sun/cosdeploy
[license-url]: https://github.com/mick-sun/cosdeploy/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/cosdeploy
[downloads-url]: https://npmjs.org/package/cosdeploy
[version-img]: https://img.shields.io/npm/v/cosdeploy
[version-url]: https://npmjs.org/package/cosdeploy
[dependency-img]: https://img.shields.io/david/mick-sun/cosdeploy
[dependency-url]: https://david-dm.org/mick-sun/cosdeploy
[devdependency-img]: https://img.shields.io/david/dev/mick-sun/cosdeploy
[devdependency-url]: https://david-dm.org/mick-sun/cosdeploy?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
