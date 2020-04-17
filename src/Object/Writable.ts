import {Pick} from './Pick'
import {Depth} from './_Internal'
import {MergeFlat} from './Merge'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

/**
@hidden
*/
export type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K]
}

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
    0: MergeFlat<WritablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
