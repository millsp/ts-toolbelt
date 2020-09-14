import {AtBasic} from './At'
import {Key} from '../Any/Key'
import {_ListOf} from './ListOf'
import {List} from '../List/List'
import {Depth, MergeStyle} from './_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {_Omit} from './Omit'
import {ObjectOf} from '../List/ObjectOf'
import {Compute} from '../Any/Compute'

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
type PatchProp<OK, O1K, K extends Key, OOK extends Key> =
    K extends OOK // if prop of `O` is optional
    ? OK          // merge it with prop of `O1`
    : O1K

/**
@hidden
*/
type __PatchFlat<O extends object, O1 extends object, OOK extends Key = keyof O> = {
    [K in keyof (O & _Omit<O1, OOK>)]: PatchProp<AtBasic<O, K>, AtBasic<O1, K>, K, OOK>
} & {}

/**
@hidden
*/
export type _PatchFlat<O extends object, O1 extends object, style extends MergeStyle> =
    LibStyle<__PatchFlat<ObjectOf<O>, ObjectOf<O1>>, O, O1, style>

/**
@hidden
*/
export type PatchFlat<O extends object, O1 extends object, style extends MergeStyle = 2, ignore = BuiltInObject> =
  O extends ignore
  ? O
  : O1 extends ignore
    ? O
    : _PatchFlat<O, O1, style>

/**
@hidden
*/
type __PatchDeep<O extends object, O1 extends object, style extends MergeStyle, ignore, OOK extends Key = keyof O> = {
    [K in keyof (O & _Omit<O1, OOK>)]: _PatchDeep<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style, ignore>
}

/**
@hidden
*/
type ChoosePatchDeep<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle, ignore> =
    OK extends ignore
    ? PatchProp<OK, O1K, K, OOK>
    : O1K extends ignore
      ? PatchProp<OK, O1K, K, OOK>
      : OK extends object
        ? O1K extends object
          ? __PatchDeep<ObjectOf<OK>, ObjectOf<O1K>, style, ignore>
          : PatchProp<OK, O1K, K, OOK>
        : PatchProp<OK, O1K, K, OOK>

/**
@hidden
*/
export type _PatchDeep<O, O1, K extends Key, OOK extends Key, style extends MergeStyle, ignore> =
    [O] extends [never]
    ? PatchProp<O, O1, K, OOK>
    : [O1] extends [never]
      ? PatchProp<O, O1, K, OOK>
      : LibStyle<ChoosePatchDeep<O, O1, K, OOK, style, ignore>, O, O1, style>

/**
@hidden
*/
export type PatchDeep<O, O1, style extends MergeStyle, ignore> =
    O extends unknown
    ? O1 extends unknown
      // give `K` and `OOK` dummy types `x` and `y`
      ? _PatchDeep<O, O1, 'x', 'y', style, ignore>
      : never
    : never

/**
Complete the fields of `O` with the ones of `O1`. This is a version of
[[Merge]] that does NOT handle optional fields, it only completes fields of `O`
with the ones of `O1`.
@param O to complete
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@param style (?=`1`) 0 = lodash, 1 = ramda
@param ignore (?=`BuiltinObject`) types not to merge
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

type test = O.Patch<O, O1, 'deep'>
// {
//     name?: string;
//     age?: number;
//     zip?: string | number;
//     pay: {
//         cvv?: number;
//         ccn?: string;
//     };
//     city: string;
// }
```
*/
export type Patch<O extends object, O1 extends object, depth extends Depth = 'flat', style extends MergeStyle = 2, ignore = BuiltInObject> = {
    'flat': PatchFlat<O, O1, style, ignore>
    'deep': Compute<PatchDeep<O, O1, style, ignore>>
}[depth]
