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
export type _MergeFlat<O extends object, O1 extends object, style extends MergeStyle = 2> =
    LibStyle<__MergeFlat<ObjectOf<O>, ObjectOf<O1>, style>, O, O1, style>

/**
@hidden
*/
export type MergeFlat<O extends object, O1 extends object, style extends MergeStyle = 2> =
    O extends unknown
    ? O1 extends unknown
      ? _MergeFlat<O, O1, style>
      : never
    : never

/**
@hidden
*/
type __MergeDeep<O extends object, O1 extends object, style extends MergeStyle, OOK extends Key = _OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: _MergeDeep<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style>
}

/**
@hidden
*/
type ChooseMergeDeep<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle> =
    OK extends BuiltInObject
    ? MergeProp<OK, O1K, K, OOK, style>
    : O1K extends BuiltInObject
      ? MergeProp<OK, O1K, K, OOK, style>
      : OK extends object
        ? O1K extends object
          ? __MergeDeep<ObjectOf<OK>, ObjectOf<O1K>, style>
          : MergeProp<OK, O1K, K, OOK, style>
        : MergeProp<OK, O1K, K, OOK, style>

/**
@hidden
*/
export type _MergeDeep<O, O1, K extends Key, OOK extends Key, style extends MergeStyle> =
    [O] extends [never]
    ? MergeProp<O, O1, K, OOK, style>
    : [O1] extends [never]
      ? MergeProp<O, O1, K, OOK, style>
      : LibStyle<ChooseMergeDeep<O, O1, K, OOK, style>, O, O1, style>

/**
@hidden
*/
export type MergeDeep<O, O1, style extends MergeStyle> =
    O extends unknown
    ? O1 extends unknown
      ? _MergeDeep<O, O1, never, never, style>
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
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat', style extends MergeStyle = 2> = {
    'flat': MergeFlat<O, O1, style>
    'deep': MergeDeep<O, O1, style>
}[depth]
