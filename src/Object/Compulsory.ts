import {MergeFlat} from './Merge'
import {Pick} from './Pick'
import {Depth} from './_Internal'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {NonNullable} from '../Union/NonNullable'
import {Keys} from './Keys'

/**
@hidden
*/
export type CompulsoryFlat<O> = {
    [K in keyof O]-?: NonNullable<O[K]>
} & {}

/**
@hidden
*/
export type CompulsoryDeep<O> = {
    [K in keyof O]-?: CompulsoryDeep<NonNullable<O[K]>>
}

/**
@hidden
*/
type CompulsoryPart<O extends object, depth extends Depth> = {
    'flat': CompulsoryFlat<O>,
    'deep': CompulsoryDeep<O>,
}[depth]

/**
Make that **`L`**'s fields cannot be [[Nullable]] or [[Optional]] (it's like
[[Required]] & [[NonNullable]] at once).
@param O to make compulsory
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Compulsory<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: CompulsoryPart<O, depth>
    0: MergeFlat<CompulsoryPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
