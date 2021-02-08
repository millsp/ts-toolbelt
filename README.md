<p align="center">
  <a href="https://github.com/millsp/ts-toolbelt">
    <img alt="banner" title="ts-toolbelt" src="https://raw.githubusercontent.com/millsp/ts-toolbelt/master/.github/banner.svg">
  </a>
  <h4 align="center">TypeScript's largest utility library</h4>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ts-toolbelt" >
    <img src="https://img.shields.io/npm/v/ts-toolbelt.svg">
  </a>
  <a href="https://travis-ci.org/millsp/ts-toolbelt" >
    <img src="https://img.shields.io/travis/millsp/ts-toolbelt.svg">
  </a>
  <a href="#">
    <img src="https://img.shields.io/npm/dm/ts-toolbelt.svg">
  </a>
  <a href="https://lgtm.com/projects/g/millsp/ts-toolbelt/context:javascript">
    <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/millsp/ts-toolbelt.svg?logo=lgtm&logoWidth=-2"/>
  </a>
  <a href="#">
    <img src="http://isitmaintained.com/badge/resolution/millsp/ts-toolbelt.svg"/>
  </a>
</p>

<p align="center">
  <a href="https://gitter.im/ts-toolbelt/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link" >
    <img src="https://img.shields.io/gitter/room/ts-toolbelt/community.svg">
  </a>
  <a href="http://makeapullrequest.com" >
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </a>
  <a href="https://conventionalcommits.org" >
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg">
  </a>
  <a href="https://github.com/millsp/ts-toolbelt/blob/master/CODE_OF_CONDUCT.md" >
    <img src="https://img.shields.io/badge/CoC-Contributor%20Covenant-green.svg">
  </a>
  <a href="#">
    <img src="https://img.shields.io/npm/l/ts-toolbelt.svg">
  </a>
</p>

<p align="center">
  <a href="https://millsp.github.io/ts-toolbelt/">📖 Documentation</a>
  ·
  <a href="https://github.com/millsp/ts-toolbelt/issues?utf8=✓&q=is%3Aissue+label%3Aannouncement+sort%3Acreated-desc+">📣 Announcements</a>
  ·
  <a href="https://github.com/millsp/ts-toolbelt/issues/new?template=---bug-report.md" alt="Bug Report">🐞 Report Bug</a>
  ·
  <a href="https://github.com/millsp/ts-toolbelt/issues/new?template=---feature-request.md" alt="Request Feature">🍩 Request Feature</a>
  ·
  <a href="https://github.com/millsp/ts-toolbelt/discussions/new" alt="Ask Questions">🤔 Ask Questions</a>
</p>

## About

**ts-toolbelt** is the largest, and most tested type library available right
now, featuring **+200 utilities**. Our type collection packages some of the most
advanced mapped types, conditional types, and recursive types on the
market.

**Spend less time, build stronger**. Benefit from a wide range of generic type
functions to achieve better type safety. 

We work just like lodash, or ramda, but applied to the type system. Our mission
is to provide you with simple ways to generate, transform, and create types. We
abstract all those complex type checks away for you. We provide a standard,
reusable, and simple API to achieve greater things with TypeScript.

**ts-toolbelt** is a well organized package that can help you perform advanced
operations on union types, object types, function types, and literal types. It
is carefully and coherently designed for building robust, flexible, and
type-safe software.

<p align="center">
  <a href="https://codesandbox.io/s/ts-toolbelt-x4jly?file=/src/index.ts">
    <img alt="demo" width="800" title="ts-toolbelt" src="https://raw.githubusercontent.com/millsp/ts-toolbelt/master/.github/demo.svg">
  </a>
</p>

We are a community that answers the question to **"How can I do this in
TypeScript?"**. Everyone is welcome to come ask questions about types. We welcome
beginners and advanced developers to come take part. **Welcome!**

## Getting Started

### Prerequisites

```sh
npm install typescript@^4.1.0 --save-dev
```

For best results, add this to your `tsconfig.json`

```ts
{
  "compilerOptions": {
    // highly recommended (required by few utilities)
    "strictNullChecks": true,

    // this is optional, but enable whenever possible
    "strict": true,

    // this is the lowest supported standard library
    "lib": ["es2015"],
  }
}
```

### Installation

```sh
npm install ts-toolbelt --save
```

### Hello World

```ts
import {Object} from "ts-toolbelt"
// Check the docs below for more

// Merge two `object` together
type merge = Object.Merge<{name: string}, {age?: number}>
// {name: string, age?: number}

// Make a field of an `object` optional
type optional = Object.Optional<{id: number, name: string}, "name"}>
// {id: number, name?: string}
```

You can [**level-up, and re-code this library from
scratch**](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab).

## [Documentation ⤢](https://millsp.github.io/ts-toolbelt/)

### Imports

The project is organized around TypeScript's main concepts:

| **Any**    | **Boolean** | **Class**    | **Function** | **Iteration** | **List** |
|------------|-------------|--------------|--------------|---------------|----------|
| **Number** | **Object**  | **Object.P** | **String**   | **Union**     | **Test** |

> **`TIP`** How to choose categories? Match your type with them.

There are many ways to import the types into your project:

* **Explicit**
  ```ts
  import {Any, Boolean, Class, Function, Iteration, List, Number, Object, String, Union} from "ts-toolbelt"
  ```

* **Compact**
  ```ts
  import {A, B, C, F, I, L, N, O, S, U} from "ts-toolbelt"
  ```

* **Portable**
  ```ts
  import tb from "ts-toolbelt"
  ```

You can also import our non-official API from the community:
  ```ts
  import {Community} from "ts-toolbelt"
  ```

> **`TIP`** The community API is for our community to publish useful types that
> don't see fit in the standard API.

### [Archives ⤢](https://github.com/millsp/ts-toolbelt/tree/gh-pages)

> **`EXAMPLE`** https://millsp.github.io/ts-toolbelt/4.2.1/

## [Good to Know ⤢](https://github.com/millsp/ts-toolbelt/discussions/categories/q-a)

In this wiki, you will find some extra resources for your learning, and
understanding.

**Are you missing something?** Participate to the open-wiki by [posting your
questions](https://github.com/millsp/ts-toolbelt/discussions/new).

## Running tests

### For this project

To run the `lint` & `type` tests, simply run:

```sh
npm test
```

### For your project

Want to test your own types? Let's get started:

```ts
import {Number, Test} from "ts-toolbelt"

const {checks, check} = Test

checks([
    check<Number.Plus<"1", "30">, "31", Test.Pass>(),
    check<Number.Plus<"5", "-3">, "2",  Test.Pass>(),
])
```

> **`TIP`** Place it in a file that won't be executed, it's just for TypeScript
> to test types.

### Continuous Integration

The releases are done with Travis CI in stages & whenever a branch or PR is
pushed:

- Tests are run with `npm test`
- Tests against
  [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/)
- Releases to npm@[branch-name]

## Compatibility

The project is maintained to adapt to the constant [changes of
TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap):

| ts-toolbelt | typescript |
|-------------|------------|
| 9.x.x       | ^4.1.x     |

Major version numbers will upgrade whenever TypeScript had breaking changes. 

Otherwise, the release versions will naturally follow the semantic versioning.

## What's next

* Automated performance tests
  ```sh
  # performance is checked manually with 
  npx tsc --noEmit --extendedDiagnostics
  ```

* Need to write more examples

## Related Projects

| **Name**                                                       | **Intro**                                                                                |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`eledoc`](https://github.com/millsp/eledoc)                   | 🌒 A material dark theme for TypeDoc.                                                    |
| [`material-candy`](https://github.com/millsp/material-candy)   | 🍬 A vscode theme to uplift your mood, stay happy and focused.                           |
| [`utility-types`](https://github.com/piotrwitek)               | Collection of utility types, complementing TypeScript built-in mapped types and aliases. |

## License

[![FOSSA
Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fpirix-gh%2Fts-toolbelt.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fpirix-gh%2Fts-toolbelt?ref=badge_large)
