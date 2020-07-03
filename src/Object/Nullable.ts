import {MergeFlat} from './Merge'
import {Nullable as UNullable} from '../Union/Nullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

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
Make some fields of **`O`** nullable (deeply or not)
@param O to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Nullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: NullablePart<O, depth>
    0: MergeFlat<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
