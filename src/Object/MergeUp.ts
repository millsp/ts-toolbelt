
import {At} from './At'
import {OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {Extends} from '../Any/Extends'
import {Boolean} from '../Boolean/Boolean'
import {Or} from '../Boolean/Or'
import {ObjectOf} from '../List/ObjectOf'
import {ListOf} from './ListOf'
import {List} from '../List/List'
import {Depth, Anyfy} from './_Internal'
import {NonNullable} from '../Union/NonNullable'

/**
@hidden
*/
type MergeUpProp<OK, O1K, K extends Key, OOK extends Key, libStyle extends Boolean> =
    K extends OOK                            // if prop of `O` is optional
    ? NonNullable<OK> | O1K                  // merge it with prop of `O1`
    : [OK] extends [never]                   // if it does not exist
      ? O1K                                  // complete with prop of `O1`
      : {
          1: undefined extends OK ? OK  : OK // ramda : keep  undefined
          0: undefined extends OK ? O1K : OK // lodash: leave undefined
      }[libStyle]

/**
@hidden
*/
type NoArray<A> =
    A extends Array<any>
    ? ObjectOf<A>
    : A

/**
@hidden
*/
export type MergeUpFlat<O extends object, O1 extends object, libStyle extends Boolean, OOK extends Key = OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: MergeUpProp<At<O, K>, At<O1, K>, K, OOK, libStyle>
}

/**
@hidden
*/
type ___MergeUpDeep<O extends object, O1 extends object, libStyle extends Boolean, OOK extends Key = OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: _MergeUpDeep<At<O, K>, At<O1, K>, K, OOK, libStyle>
}

/**
@hidden
*/
type __MergeUpDeep<OK, O1K, K extends Key, OOK extends Key, libStyle extends Boolean> =
    Or<Extends<[OK], [never]>, Extends<[O1K], [never]>> extends 1 // filter fallthrough `never`
    ? MergeUpProp<OK, O1K, K, OOK, libStyle>   // `O | O1`  not object, merge prop
    : OK extends object ? O1K extends object   // if both are of type `object`
      ? ___MergeUpDeep<OK, O1K, libStyle>      // merge if both are `object`
      : MergeUpProp<OK, O1K, K, OOK, libStyle> // `O`  not object, merge prop
      : MergeUpProp<OK, O1K, K, OOK, libStyle> // `O1` not object, merge prop

/**
@hidden
*/
type _MergeUpDeep<O, O1, K extends Key, OOK extends Key, libStyle extends Boolean> =
    // when we merge, we systematically remove inconvenient array methods
    __MergeUpDeep<NoArray<O>, NoArray<O1>, K, OOK, libStyle> extends infer X
    ? { // so that we can merge `object` and arrays in the very same way
        1: X                                                // ramda
        0: Extends<O, List> extends 1 ? ListOf<X & {}> : X  // lodash
    }[libStyle] // for lodash, we preserve (restore) arrays like it does
                // arrays are broken with `NoArray`, restored by `ListOf`
    : never

/**
@hidden
*/
export type MergeUpDeep<O extends object, O1 extends object, libStyle extends Boolean> =
    _MergeUpDeep<O, O1, never, never, libStyle> & {}

/**
Accurately complete the fields of **`O`** with the ones of **`O1`**.
This is a version of `Merge` that handles optional fields. It understands
that merged optional fields are no longer optional (have been completed).
And it is able to deal with the merging of **`Union`s** of [[Object]]s.
@param O to complete
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@param style (?=1) 1 = ramda, 0 = lodash
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

type test = O.MergeUp<O, O1, 'deep'>
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
export type MergeUp<O extends object, O1 extends object, depth extends Depth = 'flat', style extends Boolean = 1> = {
    'flat': MergeUpFlat<O, O1, style>
    'deep': MergeUpDeep<O, O1, style>
}[depth]
