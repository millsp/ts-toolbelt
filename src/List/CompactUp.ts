import {CompactUp as OCompactUp} from '../Object/CompactUp'
import {List} from './List'
import {ObjectOf} from './ObjectOf'
import {ListOf} from '../Object/ListOf'
import {Depth} from '../Object/_Internal'

/**
Merge a list of [[List]] into **`L`** with [[MergeUp]] (last-in combines or completes)
@param L to assign to
@param Ls to assign
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type CompactUp<L extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    ListOf<OCompactUp<ObjectOf<L>, {[K in keyof Ls]: ObjectOf<Ls[K] & {}>}, depth>>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
