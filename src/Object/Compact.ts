import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Merge} from './Merge'
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
type __Compact<O extends object, Os extends List<object>, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
    0: __Compact<Merge<O, Os[Pos<I>], depth>, Os, depth, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]


/**
@hidden
*/
export type _Compact<O extends object, Os extends List<object>, depth extends Depth> =
    __Compact<O, Os, depth> extends infer X
    ? Cast<X, object>
    : never

/**
Merge a list of [[Object]] into **`O`** with [[Merge]] (last-in completes)
@param O to assign to
@param Os to assign
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Compact<O extends object, Os extends List<object>, depth extends Depth = 'flat'> =
    O extends unknown
    ? Os extends unknown
      ? _Compact<O, Os, depth>
      : never
    : never
