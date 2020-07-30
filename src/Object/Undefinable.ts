import {Depth} from './_Internal'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {Contains} from '../Any/Contains'
import {_PatchFlat} from './Patch'

/**
@hidden
*/
export type UndefinableFlat<O> = {
    [K in keyof O]: O[K] | undefined
} & {}

/**
@hidden
*/
export type UndefinableDeep<O> = {
    [K in keyof O]: UndefinableDeep<O[K] | undefined>
}

/**
@hidden
*/
type UndefinablePart<O extends object, depth extends Depth> = {
    'flat': UndefinableFlat<O>,
    'deep': UndefinableDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Undefinable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: UndefinablePart<O, depth>
    0: _PatchFlat<UndefinablePart<_Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> Undefinable -> merge it with O
}[Contains<keyof O, K>]

/**
Make some fields of **`O`** **`undefined`** (deeply or not)
@param O to make undefinable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Undefinable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Undefinable<O, K, depth>
    : never
