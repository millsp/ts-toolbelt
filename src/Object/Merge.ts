import {AtBasic} from './At'
import {_OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {_ListOf} from './ListOf'
import {List} from '../List/List'
import {Depth, Anyfy, MergeStyle} from './_Internal'
import {NonNullable} from '../Union/NonNullable'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {ObjectOf} from '../List/ObjectOf'

/**
@hidden
*/
type LibStyle<Merged, O, O1, style extends MergeStyle> = {
    // for lodash, we preserve (restore) arrays like it does
    // this (heavy) version is able to 100% preserve tuples
    0: [O] extends [List]
      ? [O1] extends [List]
        ? _ListOf<Merged & {}>
        : O
      : Merged

    // for ramda, there is nothing to do, lists are destroyed
    // so here `NoList` did that job and we don't restore them
    1: Merged

    // this default behaves like lodash, it preserves arrays
    // but its way lighter because it does not restore tuples
    2: [O] extends [List]
      ? [O1] extends [List]
        ? Merged[keyof Merged][]
        : O
      : Merged
}[style]

/**
@hidden
*/
type MergeProp<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle> =
    K extends OOK                            // if prop of `O` is optional
    ? NonNullable<OK> | O1K                  // merge it with prop of `O1`
    : [OK] extends [never]                   // if it does not exist
      ? O1K                                  // complete with prop of `O1`
      : {
            0: OK extends undefined ? O1K : OK // lodash: fill undefined
            1: OK                              // ramda : keep undefined
            2: OK extends undefined ? O1K : OK // lodash: fill undefined
        }[style]

/**
@hidden
*/
type __MergeFlat<O extends object, O1 extends object, style extends MergeStyle, OOK extends Key = _OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: MergeProp<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style>
} & {}

/**
@hidden
*/
export type _MergeFlat<O extends object, O1 extends object, style extends MergeStyle> =
    LibStyle<__MergeFlat<ObjectOf<O>, ObjectOf<O1>, style>, O, O1, style>

/**
@hidden
*/
export type MergeFlat<O extends object, O1 extends object, style extends MergeStyle, noMerge> =
    O extends noMerge
    ? O
    : O1 extends noMerge
      ? O
      : _MergeFlat<O, O1, style>

/**
@hidden
*/
type __MergeDeep<O extends object, O1 extends object, style extends MergeStyle, noMerge, OOK extends Key = _OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: _MergeDeep<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style, noMerge>
}

/**
@hidden
*/
type ChooseMergeDeep<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle, noMerge> =
    OK extends noMerge
    ? MergeProp<OK, O1K, K, OOK, style>
    : O1K extends noMerge
      ? MergeProp<OK, O1K, K, OOK, style>
      : OK extends object
        ? O1K extends object
          ? __MergeDeep<ObjectOf<OK>, ObjectOf<O1K>, style, noMerge>
          : MergeProp<OK, O1K, K, OOK, style>
        : MergeProp<OK, O1K, K, OOK, style>

/**
@hidden
*/
export type _MergeDeep<O, O1, K extends Key, OOK extends Key, style extends MergeStyle, noMerge> =
    [O] extends [never]
    ? MergeProp<O, O1, K, OOK, style>
    : [O1] extends [never]
      ? MergeProp<O, O1, K, OOK, style>
      : LibStyle<ChooseMergeDeep<O, O1, K, OOK, style, noMerge>, O, O1, style>

/**
@hidden
*/
export type MergeDeep<O, O1, style extends MergeStyle, noMerge> =
    O extends unknown
    ? O1 extends unknown
      // give `K` and `OOK` dummy types `x` and `y`
      ? _MergeDeep<O, O1, 'x', 'y', style, noMerge>
      : never
    : never

/**
Accurately merge the fields of **`O`** with the ones of **`O1`**. It is
equivalent to the spread operator in JavaScript. [[Union]]s and [[Optional]]
fields will be handled gracefully.

(⚠️ needs `--strictNullChecks` enabled)
@param O to complete
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@param noMerge (?=`BuiltinObject`) types not to merge
@returns [[Object]]
@example
```ts
import {O} from 'ts-toolbelt'

type O = {
    name?: string
    age? : number
    zip? : string
    pay  : {
        cvv?: number
    }
}

type O1 = {
    age : number
    zip?: number
    city: string
    pay : {
        cvv : number
        ccn?: string
    }
}

type test = O.Merge<O, O1, 'deep'>
// {
//     name?: string;
//     age: number;
//     zip?: string | number;
//     pay: {
//         cvv: number;
//         ccn?: string;
//     };
//     city: string;
// }
```
*/
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat', style extends MergeStyle = 2, noMerge = BuiltInObject> = {
    'flat': MergeFlat<O, O1, style, noMerge>
    'deep': MergeDeep<O, O1, style, noMerge>
}[depth]
