# csv.macro

> Compile CSV content to JSON at build-time with babel-plugin-macros.

[![Babel Macro][babel-macro-badge]][babel-macro]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]
[![prettier][prettier-badge]][prettier]

> inspired by [graphql.macro](https://github.com/evenchange4/graphql.macro)

## Installation

```sh
$ npm install csv.macro
```

_Note: You'll need to install and configure [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) if you haven't already._

_Note: It works by default is using `create-react-app`._

## Usage

### `loader`

```js
import { loader } from 'csv.macro';
const jsonData = loader('./fixtures/data.csv');

      ↓ ↓ ↓ ↓ ↓ ↓

const jsonData = [
  {
    id: "1",
    username: "andrew",
    email: "andrew@example.com"
  },
  {
    id: "1",
    username: "luca",
    email: "luca@example.com"
  },
]
```

## Development

### Requirements

- node >= 11.10.0
- yarn >= 1.13.0

```sh
$ npm install --pure-lockfile
```

## Test

```sh
$ npm run format
$ npm run eslint
$ npm run flow
$ npm run test:watch
$ npm run build
```

## Publish

```bash
$ npm version patch
$ npm run changelog
git commit & push
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

[babel-macro-badge]: https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square
[babel-macro]: https://github.com/kentcdodds/babel-plugin-macros
[build-badge]: https://img.shields.io/travis/iamandrewluca/csv.macro/master.svg?style=flat-square
[build]: https://travis-ci.org/iamandrewluca/csv.macro
[npm-badge]: https://img.shields.io/npm/v/csv.macro.svg?style=flat-square
[npm]: https://www.npmjs.org/package/csv.macro
[codecov-badge]: https://img.shields.io/codecov/c/github/iamandrewluca/csv.macro.svg?style=flat-square
[codecov]: https://codecov.io/github/iamandrewluca/csv.macro?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/csv.macro.svg?style=flat-square
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
