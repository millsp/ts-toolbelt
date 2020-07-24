import {At} from './At'
import {Key} from '../Any/Key'
import {Extends} from '../Any/Extends'
import {_ListOf} from './ListOf'
import {List} from '../List/List'
import {Depth, MergeStyle, NoList} from './_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'
import {_Omit} from './Omit'
import {Keys} from './Keys'
import {Or} from '../Boolean/Or'

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
export type __PatchFlat<O extends object, O1 extends object, OOK extends Key = Keys<O>> =
    O extends unknown ? O1 extends unknown ? {
        [K in keyof (O & _Omit<O1, keyof O>)]: PatchProp<At<O, K>, At<O1, K>, K, OOK>
    } & {} : never : never

/**
@hidden
*/
type _PatchFlat<O extends object, O1 extends object, style extends MergeStyle, Patched = __PatchFlat<NoList<O>, NoList<O1>>> = {
    // when we merge, we systematically remove inconvenient array methods
    // so that we can merge `object` and arrays in the very same way
    1: Patched                  // ramda, nothing to do
    0: [O] extends [List]       // lodash
       ? [O1] extends [List]
         ? _ListOf<Patched & {}>
         : O
       : Patched
       // for lodash, we preserve (restore) arrays like it does
       // arrays are broken with `NoArray`, restored by `ListOf`
}[style]

/**
@hidden
*/
export type PatchFlat<O extends object, O1 extends object, style extends MergeStyle = 1> =
    _PatchFlat<O, O1, style> & {}

/**
@hidden
*/
type ___PatchDeep<O extends object, O1 extends object, style extends MergeStyle, OOK extends Key = Keys<O>> = {
    [K in keyof (O & _Omit<O1, keyof O>)]: _PatchDeep<At<O, K>, At<O1, K>, K, OOK, style>
} // ! do not distribute here as the step earlier is a distribution already

/**
@hidden
*/
type __PatchDeep<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle> =
    Or<Extends<[OK], [never]>, Extends<[O1K], [never]>> extends 1 // filter fallthrough `never`
    ? PatchProp<OK, O1K, K, OOK>
    : OK extends BuiltInObject
      ? PatchProp<OK, O1K, K, OOK>
      : O1K extends BuiltInObject
        ? PatchProp<OK, O1K, K, OOK>
        : OK extends object
          ? O1K extends object
            ? ___PatchDeep<OK, O1K, style>
            : PatchProp<OK, O1K, K, OOK>
          : PatchProp<OK, O1K, K, OOK>

/**
@hidden
*/
type _PatchDeep<O, O1, K extends Key, OOK extends Key, style extends MergeStyle, Patched = __PatchDeep<NoList<O>, NoList<O1>, K, OOK, style>> ={
    // when we merge, we systematically remove inconvenient array methods
    // so that we can merge `object` and arrays in the very same way
    1: Patched                  // ramda, nothing to do
    0: [O] extends [List]       // lodash
       ? [O1] extends [List]
         ? _ListOf<Patched & {}>
         : PatchProp<O, O1, K, OOK>
       : Patched
       // for lodash, we preserve (restore) arrays like it does
       // arrays are broken with `NoArray`, restored by `ListOf`
}[style]

/**
@hidden
*/
export type PatchDeep<O extends object, O1 extends object, style extends MergeStyle> =
    O extends unknown
    ? O1 extends unknown
      ? _PatchDeep<O, O1, never, never, style> & {}
      : never
    : never

/**
Complete the fields of **`O`** with the ones of **`O1`**. This is a version of
[[Merge]] that does NOT handle optional fields, it only completes fields of `O`
with the ones of `O1`.
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
export type Patch<O extends object, O1 extends object, depth extends Depth = 'flat', style extends MergeStyle = 1> = {
    'flat': PatchFlat<O, O1, style>
    'deep': PatchDeep<O, O1, style>
}[depth]
