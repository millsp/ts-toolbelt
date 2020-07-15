import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Contains} from '../Any/Contains'
import {Keys} from './Keys'
import {PatchFlat} from './Patch'

/**
@hidden
*/
export type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K]
} & {}

/**
@hidden
*/
export type WritableDeep<O> = {
    -readonly [K in keyof O]: WritableDeep<O[K]>
}

/**
@hidden
*/
type WritablePart<O extends object, depth extends Depth> = {
    'flat': WritableFlat<O>,
    'deep': WritableDeep<O>,
}[depth]

/**
Make some fields of **`O`** writable (deeply or not)
@param O to make writable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Writable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: WritablePart<O, depth>
    0: PatchFlat<WritablePart<Pick<O, K>, depth>, O, 1>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Contains<Keys<O>, K>] & {}
