import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeFlat} from './Merge'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {Depth} from './_Internal'
import {AssignDeep} from './AssignDeep'

/**
@hidden
*/
type __Assign<O extends object, Os extends List<object>, I extends Iteration = IterationOf<'0'>> = {
    0: __Assign<MergeFlat<Os[Pos<I>], O>, Os, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
@hidden
*/
export type _Assign<O extends object, Os extends List<object>> =
    __Assign<O, Os> extends infer X
    ? Cast<X, object>
    : never

/**
Assign a list of [[Object]] into **`O`** with [[Merge]] (last-in overrides)
@param O to assign to
@param Os to assign
@returns [[Object]]
@example
```ts
```
*/
export type AssignFlat<O extends object, Os extends List<object>> = O extends unknown
    ? Os extends unknown
      ? _Assign<O, Os>
      : never
    : never

export type Assign<O extends object, Os extends List<object>, depth extends Depth = 'flat'> = {
  flat: AssignFlat<O, Os>
  deep: AssignDeep<O, Os>
}[depth]
