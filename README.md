# Loscore

[![GitHub Action](https://img.shields.io/github/actions/workflow/status/raviqqe/loscore/test.yaml?branch=main&style=flat-square)](https://github.com/raviqqe/loscore/actions)
[![Codecov](https://img.shields.io/codecov/c/github/raviqqe/loscore.svg?style=flat-square)](https://codecov.io/gh/raviqqe/loscore)
[![npm](https://img.shields.io/npm/v/@raviqqe/loscore?style=flat-square)](https://www.npmjs.com/package/@raviqqe/loscore)
[![License](https://img.shields.io/github/license/raviqqe/loscore.svg?style=flat-square)](LICENSE)

> [!Warning]
> This library is still experimental and under active development.

Yet another utility library for [the Web APIs][web-api] in TypeScript.

Before using this library, also consider using [Lodash][lodash] v5 (not officially published yet as of 2023/11/11.)

## Background

[Lodash][lodash] is great. However, it was originally written in JavaScript and its project started a while ago. Loscore is an experimental library to throw away all existing legacy of it and build utilities on top of modern (de facto) standards of [the Web APIs]() and TypeScript.

## Principles

- Avoid unsound features of TypeScript as much as possible.
- Avoid overloaded functions.
  - Rather consider separate monomorphic functions.
- Do not sacrifice performance for correct typing.
- Depend only on [the Web APIs][web-api].
- Do not replicate logic implemented in [the Web APIs][web-api] already.
- Provide tree-shakeable ES modules.

## Documentation

[Here](https://raviqqe.com/loscore).

## References

- [lodash][lodash]
- [underscore](https://underscorejs.org/)

## License

[MIT](LICENSE)

[lodash]: https://lodash.com/
[web-api]: https://developer.mozilla.org/en-US/docs/Web/API
