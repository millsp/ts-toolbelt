<center>
    <img src="https://raw.githubusercontent.com/pirix-gh/ts-toolbelt/master/.github/logo.png" alt="logo" width="400"/>
</center>

## Installation  
```sh  
npm install ts-toolbelt --save
```  
```sh  
yarn add ts-toolbelt
```  

```ts  
import * as T from 'ts-toolbelt'

// Do basic number operations
type test0 = T.N.Minus<'5', '20'> // -15

type O = {
    a: {
        b: {
            c: 'hello'
            d: 'goodbye'
        }
    }
}

// Deeply change a type
type test1 = T.O.P.Update<O, ['a', 'b', 'c' | 'd'], [1, 2, 3]>

// Or just merge them
type test2 = T.O.Merge<O, {x: 'hello'}>
```

And so much more... But before you start reading the docs:

The library is organized around TypeScript concepts:

- T.**A**: **A**ny        types
- T.**B**: **B**oolean    types
- T.**C**: **C**lass      types
- T.**F**: **F**untion    types
- T.**I**: **I**teration  types
- T.**N**: **N**umber     types
- T.**O**: **O**bject     types
- T.**S**: **S**tring     types
- T.**T**: **T**uple      types
- T.**U**: **U**nion      types

```ts  
type test3 = T.A.Is<'hello', string>    // true

type test4 = T.A.Concat<[1, 2], [3, 4]> // [1, 2, 3, 4]

```

# [Documentation](https://pirix-gh.github.io/ts-toolbelt/)