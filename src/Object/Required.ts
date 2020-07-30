import {_Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Contains} from '../Any/Contains'
import {_PatchFlat} from './Patch'

/**
@hidden
*/
export type RequiredFlat<O> = {
    [K in keyof O]-?: O[K]
} & {}

/**
@hidden
*/
export type RequiredDeep<O> = {
    [K in keyof O]-?: RequiredDeep<O[K]>
}

/**
@hidden
*/
type RequiredPart<O extends object, depth extends Depth> = {
    'flat': RequiredFlat<O>,
    'deep': RequiredDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Required<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: RequiredPart<O, depth>
    0: _PatchFlat<RequiredPart<_Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Contains<keyof O, K>]

/**
Make some fields of **`O`** required (deeply or not)
@param O to make required
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Required<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Required<O, K, depth>
    : never
