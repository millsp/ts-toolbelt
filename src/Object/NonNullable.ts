import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from './_Internal'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {_PatchFlat} from './Patch'
import {BuiltInObject} from '../Misc/BuiltInObject'

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
    [K in keyof O]: O[K] extends BuiltInObject
                    ? O[K]
                    : NonNullableDeep<UNonNullable<O[K]>>
}

/**
@hidden
*/
export type NonNullablePart<O extends object, depth extends Depth> = {
    'flat': NonNullableFlat<O>,
    'deep': NonNullableDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _NonNullable<O extends object, K extends Key, depth extends Depth> =
    _PatchFlat<NonNullablePart<_Pick<O, K>, depth>, O, 2>

/**
Make some fields of `O` not nullable (deeply or not)
(Optional fields will be left untouched & `undefined`)
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
