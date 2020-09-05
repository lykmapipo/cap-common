# cap-common

[![Build Status](https://travis-ci.org/lykmapipo/cap-common.svg?branch=master)](https://travis-ci.org/lykmapipo/cap-common)
[![Dependencies Status](https://david-dm.org/lykmapipo/cap-common.svg)](https://david-dm.org/lykmapipo/cap-common)
[![Coverage Status](https://coveralls.io/repos/github/lykmapipo/cap-common/badge.svg?branch=master)](https://coveralls.io/github/lykmapipo/cap-common?branch=master)
[![GitHub License](https://img.shields.io/github/license/lykmapipo/cap-common)](https://github.com/lykmapipo/cap-common/blob/develop/LICENSE)

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![npm version](https://img.shields.io/npm/v/@lykmapipo/cap-common)](https://www.npmjs.com/package/@lykmapipo/cap-common)

Common utilities for Common Alert Protocol

## Requirements

- [NodeJS v14.5+](https://nodejs.org)
- [Npm v6.14+](https://www.npmjs.com/)

## Installation

```sh
npm install @lykmapipo/cap-common --save
```

## Usage

```js
import { CAP_STATUSES } from '@lykmapipo/cap-common';

console.log(CAP_STATUSES);
//=> ['Actual', 'Exercise']
```

## Testing

- Clone this repository

- Install all development dependencies

```sh
npm install
```

- Run example

```sh
npm run dev
```

- Then run test

```sh
npm test
```

## References

- [RSS 2.0 Specification](https://cyber.harvard.edu/rss/rss.html)
- [Common_Alerting_Protocol](https://en.wikipedia.org/wiki/Common_Alerting_Protocol)
- [Common Alerting Protocol Version 1.2](http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html)

## Contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## License

The MIT License (MIT)

Copyright (c) lykmapipo & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
