<p align="center">
  <a href="https://github.com/pirix-gh/ts-toolbelt">
    <img alt="logo" title="ts-toolbelt" src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/logo.png" width="300">
  </a>

  <h3 align="center">ts-toolbelt</h3>

  <p align="center">
    👷 All the types you need for TypeScript
    <br>
    <a href="https://pirix-gh.github.io/ts-toolbelt/" target="_blank"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    <a href="#demo">🎮 View Demo</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---bug-report.md">🐞 Report Bug</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md">🍩 Request Feature</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md">🤔  Ask Questions</a>
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
<p align="center">
  <a href="https://conventionalcommits.org" target="_blank">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg">
  </a>
</p>

<p align="center">
  <a href="https://tidelift.com/subscription/pkg/npm-ts-toolbelt?utm_source=npm-ts-toolbelt&utm_medium=referral&utm_campaign=readme" target="_blank">
    Get Professional Support
  </a>
</p>


## Table of Contents

[![Greenkeeper badge](https://badges.greenkeeper.io/pirix-gh/ts-toolbelt.svg)](https://greenkeeper.io/)

* [📜 About](#-about)
* [🍩 Features](#-features)
* [🏁 Getting started](#-getting-started)
* [📖 Documentation](#-documentation-)
* [🧠 Good to know](#-good-to-know-)
* [🎁 Contributing](#-contributing)
* [👏 Sponsoring issues](#-sponsoring-issues)
* [💉 Running tests](#-running-tests)
* [🔧 Compatibility](#-compatibility)
* [🔮 What's next](#-whats-next)
* [🙏 Acknowledgements](#-acknowledgements)

## 📜 About

**ts-toolbelt** completes TypeScript with a collection of more than **175** tested types. This makes it the biggest type collection out there.

It's goal is to improve type correctness while adding a whole new set of **features** to TypeScript. It uses the type system itself for TypeScript to compute more complex types. In other words, its API exposes types that trade **CPU & RAM** for higher type safety.

#### Goals

* Answer the question to **"How do I do this in TypeScript?"**
* Software that's more type-safe, **flexible** & more **robust**
* Bring a whole new set of extra **features** to TypeScript
* Types can be **combined** together to create new ones!
* This package aims to be the home of all **utility types**
* Computed types are always **readable**, like if you typed it
* High [**performance**](https://gist.github.com/pirix-gh/02097996d2a1e4e7aa2d54b330451ea0), so it will not bloat TS (~ +2sec, +50MB)

## 🍩 Features

Here's some of the most useful features:

* [Merge two types together](https://pirix-gh.github.io/ts-toolbelt/modules/_object_merge_.html#merge)
* [Update the field of a type](https://pirix-gh.github.io/ts-toolbelt/modules/_object_update_.html#update)
* [Make some fields optional](https://pirix-gh.github.io/ts-toolbelt/modules/_object_optional_.html#optional)
* [Change a type at any depth!](https://pirix-gh.github.io/ts-toolbelt/modules/_object_p_update_.html#update)
* [Concat two tuples together](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_concat_.html#concat)
* [Get the last item of a tuple](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_last_.html#last)
* ... and so much more

<p align="center">
  <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/demo.gif" id="demo">
<p align="center">

> If you don't find the type you are looking for, you are welcome to open a [feature request](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md)!

## 🏁 Getting Started

#### Prerequisites

Lowest TypeScript [support](#-compatibility) starts at version 3.5

```sh
npm install typescript@^3.5.0 --save
```

For best results, add this to your `tsconfig.json`

```ts
// Optional, recommended
{
  "compilerOptions": {
    // ...
    "strict": true
  }
}
```

#### Installation

```sh
npm install ts-toolbelt --save
```

#### Hello World

```ts
import {A, B, C, F, I, N, O, S, T, U} from 'ts-toolbelt'
// Wonder what these letters mean? Check the docs below

// Merge two `object` together
type merge = O.Merge<{name: string}, {age?: number}>
```

## [📖 Documentation ⤢](https://pirix-gh.github.io/ts-toolbelt/)

The project is organized around TypeScript's main concepts:

|              |                    |              |                |                 |              |
|--------------|--------------------|--------------|----------------|-----------------|--------------|
| **A**ny      | **B**oolean        | **C**lass    | **F**unction   | **I**teration   | **N**umber   |
| **O**bject   | **O**bject.**P**   | **S**tring   | **T**uple      | **U**nion       | Test         |

> **`TIP`** match the type kind you need to operate on with the above categories

**The documentation is complete but needs more examples**. So feel free to [ask for examples](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md), and I will update the docs.

#### Imports

There are many ways to import the types into your project:

* Explicit
  ```ts
  import {Any, Boolean, Class, Function, Iteration, Number, Object, String, Tuple, Union} from 'ts-toolbelt'
  ```

* Compact
  ```ts
  import {A, B, C, F, I, N, O, S, T, U} from 'ts-toolbelt'
  ```

* Portable
  ```ts
  import tb from 'ts-toolbelt'
  ```

#### Internal Docs

If you're interested to **learn** how the internals work, [this tutorial](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab) will get you on track to start writing your own types.

## [🧠 Good to Know ⤢](https://github.com/pirix-gh/ts-toolbelt/issues?q=label%3Aquestion+sort%3Areactions-%2B1-desc)

In this wiki, you'll find some extra resources for your learning & understanding.

It is incremental and it will be completed on demand, you can ask for this below.

#### [Questions ⤢](https://github.com/pirix-gh/ts-toolbelt/issues?q=label%3Aquestion+sort%3Areactions-%2B1-desc)

Are you missing something? Participate to the open-wiki by posting your questions [right here](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md).

## 🎁 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. There are many ways to contribute to the project:

#### Community

* [Help the community with answers on Gitter](https://gitter.im/ts-toolbelt/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
* [Reporting bugs or requesting new features](https://github.com/pirix-gh/ts-toolbelt/issues/new/choose)

#### Codebase

* Improving existing documentation 
* Adding new types to the collection

#### Pull Requests

1. [Read the tutorial](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab)

2. Fork the project

3. Clone your fork

4. Create a pr/**feature** branch

   ```sh
   git checkout -b pr/CoolFeature
   ```
   
5. Commit your changes

   You **must** follow the [conventional commit](https://conventionalcommits.org) to be able to commit
   ```sh
   git commit -m 'feat(name): Added this CoolFeature'
   ```

6. [Run the tests](#-running-tests)

7. Push your changes

   ```sh
   git push origin pr/CoolFeature
   ```

8. Open a pull request

## 👏 Sponsoring issues

**Sponsored issues have higher priority over non-critical issues**.<br>

You can either request a new feature or a bug fix then fund it.

<a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt">
  <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt-logo.svg?sanitize=true">
</a>
<br>
<br>

**The money will be transparently split with an issue's assignees.**

## 💉 Running tests

#### For this project

To run the `lint` & `type` tests, simply run:

```sh
npm test
```

#### For your project

Want to test your own types? Let's get started:

```ts
import {A, B, C, F, I, N, O, S, T, U, Test} from 'ts-toolbelt'

const {checks, check} = Test

checks([
    check<N.Plus<'1', '30'>, '31', Test.Pass>(),
    check<N.Plus<'5', '-3'>, '2',  Test.Pass>(),
])
```

> Place it in a file that won't be executed, it's just for TypeScript to test types

#### Continuous Integration

The releases are done with Travis CI in stages & whenever a branch or PR is pushed:

- Tests are run with `npm test`
- Tests against [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/)
- Releases to npm@[branch-name]

If you wrote tests & would like your project to be tested too, please open an issue.

## 🔧 Compatibility

The project is maintained to adapt to the constant [changes of TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap):

| ts-toolbelt | typescript |
|-------------|------------|
| 1.x.x       | ~3.5.x     |
| 2.x.x       | ^3.5.x     |
| 3.x.x       | ^3.5.x     |
| 4.x.x       | ^3.5.x     |

Major version numbers will upgrade whenever TypeScript had breaking changes (it happened that TS had breaking changes on minor versions). Otherwise, the release versions will naturally follow the semantic versioning.

## 🔮 What's next

* Automated performance tests
  ```sh
  # performance is checked manually with 
  npx tsc --noEmit --extendedDiagnostics
  ```
* Improve with user feedback
* Need to write the examples

## 🙏 Acknowledgements

Many, many thanks to all the
[contributors](https://github.com/pirix-gh/ts-toolbelt/graphs/contributors) and:

* [André Staltz](https://github.com/staltz)
* [Joe Calzaretta](https://github.com/jcalz)
* [Matt McCutchen](https://github.com/mattmccutchen)
* [Regev Brody](https://github.com/regevbr)
* [Titian C.-Dragomir](https://github.com/dragomirtitian)

## 💟 Friendly Projects

* [`eledoc`](https://github.com/pirix-gh/eledoc) - 🌒 A material dark theme for TypeDoc 
* [`utility-types`](https://github.com/piotrwitek/utility-types) - Collection of utility types, complementing TypeScript built-in mapped types and aliases
