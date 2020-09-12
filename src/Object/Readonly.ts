import {_Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {_PatchFlat} from './Patch'
import {BuiltInObject} from '../Misc/BuiltInObject'

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
    +readonly [K in keyof O]: O[K] extends BuiltInObject
                              ? O[K]
                              : ReadonlyDeep<O[K]>
}

/**
@hidden
*/
export type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Readonly<O extends object, K extends Key, depth extends Depth> =
    _PatchFlat<ReadonlyPart<_Pick<O, K>, depth>, O, 2>

/**
Make some fields of `O` readonly (deeply or not)
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
