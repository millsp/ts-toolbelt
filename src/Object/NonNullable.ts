import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from './_Internal'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {Contains} from '../Any/Contains'
import {_PatchFlat} from './Patch'

/**
@hidden
*/
export type NonNullableFlat<O> = {
    [K in keyof O]: UNonNullable<O[K]>
} & {}

/**
@hidden
*/
export type NonNullableDeep<O> = {
    [K in keyof O]: NonNullableDeep<UNonNullable<O[K]>>
}

/**
@hidden
*/
type NonNullablePart<O extends object, depth extends Depth> = {
    'flat': NonNullableFlat<O>,
    'deep': NonNullableDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _NonNullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: NonNullablePart<O, depth>
    0: _PatchFlat<NonNullablePart<_Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> non-nullable -> merge it with O
}[Contains<keyof O, K>]

/**
Make some fields of **`O`** not nullable (deeply or not)
(Optional fields will be left untouched & **`undefined`**)
@param O to make non nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type NonNullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _NonNullable<O, K, depth>
    : never
