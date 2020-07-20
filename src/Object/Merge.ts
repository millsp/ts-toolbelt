import {AtBasic} from './At'
import {OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {Extends} from '../Any/Extends'
import {Or} from '../Boolean/Or'
import {ObjectOf} from '../List/ObjectOf'
import {ListOf} from './ListOf'
import {List} from '../List/List'
import {Depth, Anyfy, MergeStyle} from './_Internal'
import {NonNullable} from '../Union/NonNullable'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
@hidden
*/
type MergeProp<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle> =
    K extends OOK                            // if prop of `O` is optional
    ? NonNullable<OK> | O1K                  // merge it with prop of `O1`
    : [OK] extends [never]                   // if it does not exist
      ? O1K                                  // complete with prop of `O1`
      : {
            1: OK extends undefined ? OK  : OK // ramda : keep undefined
            0: OK extends undefined ? O1K : OK // lodash: fill undefined
        }[style]

/**
@hidden
*/
type NoList<A> =
    A extends List
    ? ObjectOf<A>
    : A

/**
@hidden
*/
type __MergeFlat<O extends object, O1 extends object, style extends MergeStyle, OOK extends Key = OptionalKeys<O>> =
    O extends unknown ? O1 extends unknown ? {
        [K in keyof (Anyfy<O> & O1)]: MergeProp<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style>
    } & {} : never : never

/**
@hidden
*/
type _MergeFlat<O extends object, O1 extends object, style extends MergeStyle> =
    // when we merge, we systematically remove inconvenient array methods
    __MergeFlat<NoList<O>, NoList<O1>, style> extends infer X
    ? { // so that we can merge `object` and arrays in the very same way
        1: X                                                // ramda
        0: Extends<O, List> extends 1 ? ListOf<X & {}> : X  // lodash
    }[style] // for lodash, we preserve (restore) arrays like it does
                // arrays are broken with `NoArray`, restored by `ListOf`
    : never

/**
@hidden
*/
export type MergeFlat<O extends object, O1 extends object, style extends MergeStyle> =
    _MergeFlat<O, O1, style> & {}

/**
@hidden
*/
type ___MergeDeep<O extends object, O1 extends object, style extends MergeStyle, OOK extends Key = OptionalKeys<O>> = {
    [K in keyof (Anyfy<O> & O1)]: _MergeDeep<AtBasic<O, K>, AtBasic<O1, K>, K, OOK, style>
} // ! do not distribute here as the step earlier is a distribution already

/**
@hidden
*/
type __MergeDeep<OK, O1K, K extends Key, OOK extends Key, style extends MergeStyle> =
    Or<Extends<[OK], [never]>, Extends<[O1K], [never]>> extends 1 // filter fallthrough `never`
    ? MergeProp<OK, O1K, K, OOK, style>
    : OK extends BuiltInObject
      ? MergeProp<OK, O1K, K, OOK, style>
      : O1K extends BuiltInObject
        ? MergeProp<OK, O1K, K, OOK, style>
        : OK extends object
          ? O1K extends object
            ? ___MergeDeep<OK, O1K, style>
            : MergeProp<OK, O1K, K, OOK, style>
          : MergeProp<OK, O1K, K, OOK, style>

/**
@hidden
*/
type _MergeDeep<O, O1, K extends Key, OOK extends Key, style extends MergeStyle> =
    // when we merge, we systematically remove inconvenient array methods
    __MergeDeep<NoList<O>, NoList<O1>, K, OOK, style> extends infer X
    ? { // so that we can merge `object` and arrays in the very same way
          1: X                                                    // ramda
          0: Extends<O | O1, List> extends 1 ? ListOf<X & {}> : X // lodash
      }[style] // for lodash, we preserve (restore) arrays like it does
               // arrays are broken with `NoList`, restored by `ListOf`
    : never

/**
@hidden
*/
export type MergeDeep<O extends object, O1 extends object, style extends MergeStyle> =
    _MergeDeep<O, O1, never, never, style> & {}

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
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat', style extends MergeStyle = 1> = {
    'flat': MergeFlat<O, O1, style>
    'deep': MergeDeep<O, O1, style>
}[depth]
