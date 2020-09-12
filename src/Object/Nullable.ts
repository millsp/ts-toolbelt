import {Nullable as UNullable} from '../Union/Nullable'
import {Depth} from './_Internal'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {_PatchFlat} from './Patch'

/**
@hidden
*/
export type NullableFlat<O> = {
    [K in keyof O]: UNullable<O[K]>
} & {}

/**
@hidden
*/
export type NullableDeep<O> = {
    [K in keyof O]: NullableDeep<UNullable<O[K]>>
}

/**
@hidden
*/
type NullablePart<O extends object, depth extends Depth> = {
    'flat': NullableFlat<O>,
    'deep': NullableDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Nullable<O extends object, K extends Key, depth extends Depth> =
    _PatchFlat<NullablePart<_Pick<O, K>, depth>, O, 2>

/**
Make some fields of `O` nullable (deeply or not)
@param O to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Nullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Nullable<O, K, depth>
    : never

