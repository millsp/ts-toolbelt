<p align="center">
  <a href="https://github.com/pirix-gh/ts-toolbelt">
    <img alt="logo" title="ts-toolbelt" src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/logo.png" width="300">
  </a>

  <h3 align="center">ts-toolbelt</h3>

  <p align="center">
    👷 Higher type safety for TypeScript
    <br>
    <a href="https://pirix-gh.github.io/ts-toolbelt/" target="_blank"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    <a href="#">🎮 View Demo</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---bug-report.md">🐞 Report Bug</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md">🍩 Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://gitter.im/ts-toolbelt/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="_blank">
    <img src="https://img.shields.io/gitter/room/ts-toolbelt/community.svg">
  </a>
  <a href="https://www.npmjs.com/package/ts-toolbelt" target="_blank">
    <img src="https://img.shields.io/npm/v/ts-toolbelt.svg">
  </a>
  <a href="https://travis-ci.org/pirix-gh/ts-toolbelt" target="_blank">
    <img src="https://img.shields.io/travis/pirix-gh/ts-toolbelt.svg">
  </a>
  <a href="#">
    <img src="https://img.shields.io/npm/dm/ts-toolbelt.svg">
  </a>
  <a href="http://makeapullrequest.com" target="_blank">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </a>
  <a href="#">
    <img src="https://img.shields.io/npm/l/ts-toolbelt.svg">
  </a>
</p>

## Table of Contents

* [📜 About](#-about)
* [🎩 Features](#-features)
* [🏁 Getting started](#-getting-started)
* [📖 Documentation](#-documentation)
* [➕ Contributing](#-contributing)
* [👏 Sponsoring issues](#-sponsoring-issues)
* [💉 Running tests](#-running-tests)
* [🔧 Compatibility](#-compatibility)
* [🔮 What's next](#-whats-next)
* [🙏 Acknowledgments](#-acknowledgments)

## 📜 About

**ts-toolbelt** is a collection of types that makes TypeScript even **safer**.
It's goal is to improve type correctness while adding a whole new set of
**features** to TypeScript. 

It uses the type system itself for TypeScript to compute more complex types. In
other words, its API exposes types that trade **CPU & RAM** for higher type
safety.

**ts-toolbelt** completes TypeScript with a collection of more than 150 types.

### Goals?
* This package aims to be the home of all **utility types**
* To keep reasonable **performance**, so it won't bloat TS
* And write software that's more type-safe, more **robust**
* (And bring a whole new set of **features** to TypeScript)

## 🎩 Features

Here's some of the most useful features:

* [Merge two types together](https://pirix-gh.github.io/ts-toolbelt/modules/_object_merge_.html#merge)
* [Update the field of a
  type](https://pirix-gh.github.io/ts-toolbelt/modules/_object_update_.html#update)
* [Make some fields optional](https://pirix-gh.github.io/ts-toolbelt/modules/_object_optional_.html#optional)
* [Change a type at any depth!](https://pirix-gh.github.io/ts-toolbelt/modules/_object_p_update_.html#update)
* [Concat two tuples together](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_concat_.html#concat)
* [Get the last item of a tuple](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_last_.html#last)
* ... and so much more

<p align="center">
  <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/demo.gif" id="demo">
<p align="center">

> If you don't find the type you are looking for, you are welcome to open
a [feature request](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md)!

## 🏁 Getting Started

### Prerequisites

```sh
npm install typescript@^3.5.0 --save
```

### Installation

```sh
npm install ts-toolbelt --save
```

### Hello World

```ts
import {A, B, C, F, I, N, O, S, T, U} from 'ts-toolbelt'

// Merge two `object` together
type merge = O.Merge<{name: string}, {age?: number}>
```

## [📖 Documentation ⤢](https://pirix-gh.github.io/ts-toolbelt/)

The project is organized around TypeScript's main concepts:

|                |                |                 |              |             |
|----------------|----------------|-----------------|--------------|-------------|
| **A**(ny)      | **C**(lass)    | **I**(teration) | **O**(bject) | **T**(uple) |
| **B**(boolean) | **F**(unction) | **N**(umber)    | **S**(tring) | **U**(nion) |

[🔍 Browse the docs](https://pirix-gh.github.io/ts-toolbelt/)

## 🎁 Contributing

Contributions are what make the open source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly appreciated**.
There are many ways to contribute to the project:

### Community
* [Help the community with answers on Gitter](https://gitter.im/ts-toolbelt/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
* [Reporting bugs or requesting new features](https://github.com/pirix-gh/ts-toolbelt/issues/new/choose)

### Codebase
* Improving existing documentation 
* Add new types to the collection

### Pull Requests
* Fork the project
* Clone your fork
* Create a pr/**feature** branch
  ```sh
  git checkout -b pr/CoolFeature
  ```
* Commit your changes
  ```sh
  git commit -m 'Added this CoolFeature'
  ```
* Run the tests
* Commit your changes
  ```sh
  git push origin pr/CoolFeature
  ```
* Open a pull request

## 👏 Sponsoring issues

<a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt">
  <img
  src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt-logo.svg?sanitize=true">
</a>

## 💉 Running tests

To run the tests, simply run:

```sh
npm test
```

**ts-toolbelt** has its own type-testing system that you can use on your own
project. If you desire to do so, create a test file and start with the
following:
```ts
import {A, B, C, F, I, N, O, S, T, U, Test} from 'ts-toolbelt'

const {checks, check} = Test

checks([
    check<N.Plus<'1', '30'>,    '31',  Test.Pass>(),
    check<N.Plus<'5', '-3'>,    '2',   Test.Pass>(),
])
```

## 🔧 Compatibility

The project is maintained to adapt to the constant
[changes](#https://github.com/Microsoft/TypeScript/wiki/Roadmap) of TypeScript:

| ts-toolbelt | typescript |
|-------------|------------|
| 1.0.x       | 3.5.x      |

## 🔮 What's next
* Automated performance tests
  ```sh
  #Performance is checked manually with 
  npx tsc --noEmit ----extendedDiagnostics
  ```
* Improve with user feedback

## 🙏 Acknowledgements

Many thanks to all the [contributors](https://github.com/pirix-gh/ts-toolbelt/graphs/contributors) and:
* [Matt McCutchen](https://github.com/mattmccutchen)
