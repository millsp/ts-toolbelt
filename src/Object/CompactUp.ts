import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeUp} from './MergeUp'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {Depth} from './_Internal'

/**
@hidden
*/
type __CompactUp<O extends object, Os extends List<object>, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
    0: __CompactUp<MergeUp<O, Os[Pos<I>], depth>, Os, depth, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _AssignUp<O extends object, Os extends List<object>, depth extends Depth> =
    __CompactUp<O, Os, depth> extends infer X
    ? Cast<X, object>
    : never

/**
Merge a list of [[Object]] into **`O`** with [[MergeUp]] (last-in combines or completes)
@param O to assign to
@param Os to assign
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type CompactUp<O extends object, Os extends List<object>, depth extends Depth = 'flat'> =
    O extends unknown
    ? Os extends unknown
      ? _AssignUp<O, Os, depth>
      : never
    : never
