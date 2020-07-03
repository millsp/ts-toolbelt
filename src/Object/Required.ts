import {MergeFlat} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

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
Make some fields of **`O`** required (deeply or not)
@param O to make required
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Required<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: RequiredPart<O, depth>
    0: MergeFlat<RequiredPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
