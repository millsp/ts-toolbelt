import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeDeep} from './Merge'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type __AssignDeep<O extends object, Os extends List<object>, I extends Iteration = IterationOf<'0'>> = {
  0: __AssignDeep<MergeDeep<Os[Pos<I>], O>, Os, Next<I>>
  1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _AssignDeep<O extends object, Os extends List<object>> = __AssignDeep<O, Os> extends infer X
  ? Cast<X, object>
  : never

/**
Assign a list of [[Object]] into **`O`** with [[MergeDeep]] (last-in overrides)
@param O to assign to
@param Os to assign
@returns [[Object]]
@example
```ts
```
*/
export type AssignDeep<O extends object, Os extends List<object>> = O extends unknown
  ? Os extends unknown
    ? _AssignDeep<O, Os>
    : never
  : never
