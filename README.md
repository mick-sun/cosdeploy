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

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const cosdeploy = require('cosdeploy')
const result = cosdeploy('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### cosdeploy(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

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
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ cosdeploy --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ cosdeploy w --host zce.me
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
