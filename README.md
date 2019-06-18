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

- [About](#about)
- [Features](#features)
- [Getting started](#getting-started)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Sponsoring issues](#sponsoring-issues)
- [Running tests](#running-tests)
- [Compatibility](#compatibility)
- [What's next](#whats-next)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [Licence](#licence)

## About

**ts-toolbelt** is a collection of types that makes programming with TypeScript even safer. 

It's goal is to ensure type correctness without too much effort from
your part, while adding a whole new set of features to TypeScript.

### How?

**ts-toolbelt** performs complex operations on types. It's API exposes types that will trade your CPU & RAM for a higher type safety.

### Demo

## Features

Only the most useful features are mentioned here. You will find the complete
list in the [documentation](https://pirix-gh.github.io/ts-toolbelt/) website.

* Merge two types together (doc)
* Update the field of a type (doc)
* Make some fields optional (doc)
* Change a type at any depth! (doc)
* Concat two tuples together (doc)
* Get the last item of a tuple (doc)
* ... and so much more

One of the goals of **ts-toolbelt** is to bring all the types one would ever
need to a single package.

If you don't find the type you were looking for, please feel welcome to open
a [feature request](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md)!

## Getting Started

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

type concat = tb.T.Concat<['hello'], ['world']>
// ['hello', 'world']
```

## Documentation

Right above, you might have notices that we've used `O` and `T` to access the
tools. They stand for **O**bject and **T**uple, respectively. And the whole
library is organized the same way, around TypeScript concepts:

- A[ny]
- B[boolean]
-  

https://pirix-gh.github.io/ts-toolbelt/

## Contributing

## Sponsoring issues

<a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt">
  <img
  src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt-logo.svg?sanitize=true">
</a>

## Running tests

## Compatibility

## What's next

## Acknowledgements

## Licence
