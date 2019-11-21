<p align="center">
  <a href="https://github.com/pirix-gh/ts-toolbelt">
    <img alt="logo" title="ts-toolbelt" src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/logo.png" width="300" alt="Logo">
  </a>
  <h1 align="center">ts-toolbelt</h1>
  <h3 align="center">🔩 Get the most out of TypeScript</h3>
  <br>
  <p align="center">
    <a href="https://pirix-gh.github.io/ts-toolbelt/">📖 Read Docs</a>
    ·
    <a href="#demo">🎮 View Demo</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---bug-report.md" alt="Bug Report">🐞 Report Bug</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md" alt="Request Feature">🍩 Request Feature</a>
    ·
    <a href="https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md" alt="Ask Questions">🤔 Ask Questions</a>
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
  <a href="https://github.com/pirix-gh/ts-toolbelt/blob/master/CODE_OF_CONDUCT.md" target="_blank">
    <img src="https://img.shields.io/badge/Code%20of%20Conduct-Contributor%20Covenant-green.svg">
  </a>
</p>

<p align="center">
  <a href="https://patreon.com/pirix" target="_blank">
    <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/patreon.png" height="25px" alt="Support Me">
  </a>
  <a href="https://tidelift.com/subscription/pkg/npm-ts-toolbelt?utm_source=npm-ts-toolbelt&utm_medium=referral&utm_campaign=readme" target="_blank">
    <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/tidelift.png" height="25px" alt="Join Tidelift">
  </a>
  <a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt" target="_blank">
    <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt.png" height="25px" alt="Fund an Issue">
  </a>
</p>

## Table of Contents

* [📜 About](#-about)
* [🍩 Features](#-features)
* [🏁 Getting started](#-getting-started)
* [📖 Documentation](#-documentation-)
* [🧠 Good to know](#-good-to-know-)
* [📣 Announcements](#-announcements-)
* [🎁 Contributing](#-contributing)
* [💉 Running tests](#-running-tests)
* [🔧 Compatibility](#-compatibility)
* [💼 For enterprise](#-for-enterprise)
* [👏 Sponsoring issues](#-sponsoring-issues)
* [🔮 What's next](#-whats-next)
* [🙏 Acknowledgements](#-acknowledgements)

## 📜 About

**ts-toolbelt** is a **type library** that provides simple ways to **update**, **change**, and **compute** TypeScript types.

With its programmatic API, you can write type-safe software more **easily** and in **less time** than you do today.

It brings **new capabilities** to TypeScript with **+200** tested type utilities. This makes it the largest, and most reliable type collection out there.
It uses the type system itself for TypeScript to compute complex types. So its API exposes types that trade **CPU & RAM** for higher type safety.

You'll find all the types you can ever need in this single and **well organized** package.

### Goals

* Answer the question to **"How do I do this in TypeScript?"**
* Provide a lodash-like **programmatic API** for the type system
* Promote type **evolution** & **reusability** within your codebase
* Computed types are always **readable**, like if you typed it
* Software that is more **type-safe**, **flexible**, and **robust**
* Bring a whole new set of extra **features** to TypeScript
* This package aims to be the home of all **utility types**
* High [**performance**](https://gist.github.com/pirix-gh/02097996d2a1e4e7aa2d54b330451ea0), so it will not bloat TS (~ +2sec, +50MB)

## 🍩 Features

Here's some of the most useful features:

* [Merge two types together](https://pirix-gh.github.io/ts-toolbelt/modules/_object_merge_.html#merge)
* [Update the field of a type](https://pirix-gh.github.io/ts-toolbelt/modules/_object_update_.html#update)
* [Make some fields optional](https://pirix-gh.github.io/ts-toolbelt/modules/_object_optional_.html#optional)
* [Change a type at any depth!](https://pirix-gh.github.io/ts-toolbelt/modules/_object_p_update_.html#update)
* [Concat two tuples together](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_concat_.html#concat)
* [Get the last item of a tuple](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_last_.html#last)
<details>
<summary>
<b>Expand to See More</b>
</summary>
<br>

| Object                                                                                          | Tuple                                                                                 | Function                                                                                      |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [Object/Filter](https://pirix-gh.github.io/ts-toolbelt/modules/_object_filter_.html)            | [Tuple/Append](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_append_.html)    | [Function/NoInfer](https://pirix-gh.github.io/ts-toolbelt/modules/_function_noinfer_.html)    |
| [Object/MergeUp](https://pirix-gh.github.io/ts-toolbelt/modules/_object_mergeup_.html)          | [Tuple/Drop](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_drop_.html)        | [Function/Promisify](https://pirix-gh.github.io/ts-toolbelt/modules/_misc_promisify_.html)    |
| [Object/NonNullable](https://pirix-gh.github.io/ts-toolbelt/modules/_object_nonnullable_.html)  | [Tuple/Flatten](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_flatten_.html)  |                                                                                               |
| [Object/Nullable](https://pirix-gh.github.io/ts-toolbelt/modules/_object_nullable_.html)        | [Tuple/Concat](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_concat_.html)    |                                                                                               |
| [Object/Optional](https://pirix-gh.github.io/ts-toolbelt/modules/_object_optional_.html)        | [Tuple/Pop](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_pop_.html)          |                                                                                               |
| [Object/P/Update](https://pirix-gh.github.io/ts-toolbelt/modules/_object_p_update_.html)        | [Tuple/Reverse](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_reverse_.html)  |                                                                                               |
| [Object/PathUp](https://pirix-gh.github.io/ts-toolbelt/modules/_object_pathup_.html)            | [Tuple/Tail](https://pirix-gh.github.io/ts-toolbelt/modules/_tuple_tail_.html)        |                                                                                               |
| [Object/Required](https://pirix-gh.github.io/ts-toolbelt/modules/_object_required_.html)        |                                                                                       |                                                                                               |
| [Object/Select](https://pirix-gh.github.io/ts-toolbelt/modules/_object_select_.html)            |                                                                                       |                                                                                               |
| [Object/Update](https://pirix-gh.github.io/ts-toolbelt/modules/_object_update_.html)            |                                                                                       |                                                                                               |
| [Object/Writable](https://pirix-gh.github.io/ts-toolbelt/modules/_object_writable_.html)        |                                                                                       |                                                                                               |

> **`TIP`** [Add something to this list](https://github.com/pirix-gh/ts-toolbelt/edit/master/README.md)

</details>

<p align="center">
  <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/demo.gif" id="demo" width="750px">
<p align="center">

> **`TIP`** If you don't find the type you are looking for, you are welcome to open a [feature request](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---feature-request.md)!

## 🏁 Getting Started

### Prerequisites

Lowest TypeScript [support](#-compatibility) starts at v3.5

```sh
npm install typescript@^3.6.0 --save-dev
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

### Installation

```sh
npm install ts-toolbelt --save
```

### Hello World

```ts
import {Object} from 'ts-toolbelt'
// Check the docs below for more

// Merge two `object` together
type merge = Object.MergeUp<{name: string}, {age?: number}>
// {name: string, age?: number}

// Make a field of an `object` optional
type optional = Object.Optional<{id: number, name: string}, 'name'}>
// {id: number, name?: string}
```

> **`TIP`** You can also grab the demo [over here](https://gist.github.com/pirix-gh/f7f7d18773f79bf0618fb5cd55bd48f8)

You can [**level-up, and re-code this library from scratch**](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab).

## [📖 Documentation ⤢](https://pirix-gh.github.io/ts-toolbelt/)

The project is organized around TypeScript's main concepts:

|              |                    |              |                |                 |              |
|--------------|--------------------|--------------|----------------|-----------------|--------------|
| **A**ny      | **B**oolean        | **C**lass    | **F**unction   | **I**teration   | **N**umber   |
| **O**bject   | **O**bject.**P**   | **S**tring   | **T**uple      | **U**nion       | Test         |

> **`TIP`** match the type you need to work with with the above

**The documentation is complete but needs more examples**. So feel free to [ask for examples](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md), and I will update the docs.

### Imports

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

### Internal Docs

If you're interested to **learn** how the internals work, [this tutorial](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab) will get you on track to start writing your own types.


### [Archives ⤢](https://github.com/pirix-gh/ts-toolbelt/tree/gh-pages)

Access older docs at https://pirix-gh.github.io/ts-toolbelt/version/

> **`EXAMPLE`** https://pirix-gh.github.io/ts-toolbelt/4.2.1/

## [🧠 Good to Know ⤢](https://github.com/pirix-gh/ts-toolbelt/issues?q=label%3Aquestion+sort%3Areactions-%2B1-desc+label%3Awiki)

In this wiki, you will find some extra resources for your learning, and understanding.

**Are you missing something?** Participate to the open-wiki by [posting your questions](https://github.com/pirix-gh/ts-toolbelt/issues/new?template=---question.md).

## [📣 Announcements ⤢](https://github.com/pirix-gh/ts-toolbelt/issues?utf8=✓&q=is%3Aissue+label%3Aannouncement+sort%3Acreated-desc+)

Stay up to date with the latest announcements with this regular digest of important changes.

## 🎁 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. There are many ways to contribute to the project:

### Community

* [Help the community with answers on Gitter](https://gitter.im/ts-toolbelt/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
* [Reporting bugs or requesting new features](https://github.com/pirix-gh/ts-toolbelt/issues/new/choose)

### Codebase

* Improving existing documentation 
* Adding new types to the collection

### Pull Requests

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
   npm run release -- --no-tags
   ```

8. Open a pull request

## 💉 Running tests

### For this project

To run the `lint` & `type` tests, simply run:

```sh
npm test
```

### For your project

Want to test your own types? Let's get started:

```ts
import {Number, Test} from 'ts-toolbelt'

const {checks, check} = Test

checks([
    check<Number.Plus<'1', '30'>, '31', Test.Pass>(),
    check<Number.Plus<'5', '-3'>, '2',  Test.Pass>(),
])
```

> **`TIP`** Place it in a file that won't be executed, it's just for TypeScript to test types

### Continuous Integration

The releases are done with Travis CI in stages & whenever a branch or PR is pushed:

- Tests are run with `npm test`
- Tests against [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/)
- Releases to npm@[branch-name]

If you wrote tests & would like your project to be tested too, please open an issue.

## 🔧 Compatibility

The project is maintained to adapt to the constant [changes of TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap):

| ts-toolbelt | typescript |
|-------------|------------|
| 4.x.x       | ^3.5.x     |
| 2.x.x       | ^3.5.x     |
| 3.x.x       | ^3.5.x     |
| 1.x.x       | ~3.5.x     |

Major version numbers will upgrade whenever TypeScript had breaking changes (it happened that TS had breaking changes on minor versions). Otherwise, the release versions will naturally follow the semantic versioning.

## 💼 For enterprise

Available as part of the Tidelift Subscription.

The maintainers of `ts-toolbelt` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-ts-toolbelt?utm_source=npm-ts-toolbelt&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## 👏 Sponsoring issues

**Sponsored issues have higher priority over non-critical issues**.

You can either request a new feature or a bug fix, and then fund it.

**The money will be transparently split with an issue's assignees.**

<a href="https://issuehunt.io/r/pirix-gh/ts-toolbelt" target="_blank">
  <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/issuehunt.png" height="25px">
</a>
<br>

## 🔮 What's next

* Automated performance tests
  ```sh
  # performance is checked manually with 
  npx tsc --noEmit --extendedDiagnostics
  ```
* Need to write the examples

## 🙏 Acknowledgements

Many, many thanks to all the [contributors](https://github.com/pirix-gh/ts-toolbelt/graphs/contributors) and:

* [André Staltz](https://github.com/staltz)
* [Joe Calzaretta](https://github.com/jcalz)
* [Matt McCutchen](https://github.com/mattmccutchen)
* [Monroe Ekilah](https://github.com/ekilah)
* [Nathan S.-Sanders](https://github.com/sandersn)
* [Regev Brody](https://github.com/regevbr)
* [Titian C.-Dragomir](https://github.com/dragomirtitian)

## 💟 Friendly Projects

* [`eledoc`](https://github.com/pirix-gh/eledoc) - 🌒 A material dark theme for TypeDoc 
* [`utility-types`](https://github.com/piotrwitek/utility-types) - Collection of utility types, complementing TypeScript built-in mapped types and aliases
