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

- [📜 About](#-about)
- [🎩 Features](#-features)
- [🏁 Getting started](#-getting-started)
- [📖 Documentation](#-documentation)
- [➕ Contributing](#-contributing)
- [👏 Sponsoring issues](#-sponsoring-issues)
- [💉 Running tests](#-running-tests)
- [🔧 Compatibility](#-compatibility)
- [🔮 What's next](#-whats-next)
- [🙏 Acknowledgments](#-acknowledgments)
- [💬 Contact](#-contact)
- [🔓 Licence](#-licence)

## 📜 About

**ts-toolbelt** is a collection of types that makes programming with TypeScript even safer. It's goal is to ensure type correctness without too much effort from your part, while adding a whole new set of features to TypeScript.

### How?

**ts-toolbelt** uses the type system itself for TypeScript to compute more
complex types. In other words, its API exposes types that trade **CPU & RAM**
for higher type safety.

### Goals?
 * This package aims to be the home of all utility types
 * To keep reasonable performance, so it won't bloat TS
 * And write software that's more type-safe, more robust
 * (And bring a whole new set of features to TypeScript)

## 🎩 Features

Here's some of the most useful features:

* Merge two types together
  
* Update the field of a type 
* Make some fields optional
* Change a type at any depth!
* Concat two tuples together
* Get the last item of a tuple
* ... and so much more

One of the goals of **ts-toolbelt** is to bring all the types one would ever
need to a single package.

If you don't find the type you were looking for, please feel welcome to open
a [feature request](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md)!

## 🏁 Getting Started

The project is maintained to adapt to the constant changes of TypeScript. See [compatibility](#compatibility) for more information.

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
import tb from 'ts-toolbelt'

type merged = tb.O.Merge<{name: string}, {age: number}>
// {name: string, age: number}
// `O` stands for "object"

type concat = tb.T.Concat<['hello'], ['world']>
// ['hello', 'world']
// `T` stands for "tuple"
```

## 📖 Documentation

If you read the example above you will notice that the project is organized around TypeScript's main concepts:
* **A**(ny)
* **B**(boolean)
* **C**(lass)
* **F**(unction)
* **I**(teration)
* **N**(umber)
* **O**(bject)
* **S**(tring)
* **T**(uple)
* **U**(nion)

<h3 align="center">
  <a href="https://pirix-gh.github.io/ts-toolbelt/">
    🔍 Browse the docs
  </a>
</h3>

## ➕ Contributing

## 👏 Sponsoring issues

<a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt">
  <img
  src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt-logo.svg?sanitize=true">
</a>

## 💉 Running tests

## 🔧 Compatibility

## 🔮 What's next

## 🙏 Acknowledgements

## 💬 Contact

## 🔓 Licence
