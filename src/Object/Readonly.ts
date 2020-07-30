import {_Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Contains} from '../Any/Contains'
import {Keys} from './Keys'
import {_PatchFlat} from './Patch'

/**
@hidden
*/
export type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
} & {}

/**
@hidden
*/
export type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: ReadonlyDeep<O[K]>
}

/**
@hidden
*/
type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Readonly<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: ReadonlyPart<O, depth>
    0: _PatchFlat<ReadonlyPart<_Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Contains<keyof O, K>]

/**
Make some fields of **`O`** readonly (deeply or not)
@param O to make readonly
@param K (?=`Key`) to choose fields
@param depth (?=`'default'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Readonly<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Readonly<O, K, depth>
    : never
