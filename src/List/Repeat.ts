import {Next} from '../Iteration/Next'
import {Prepend} from './Prepend'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {List} from './List'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type __Repeat<N extends Number, A, L extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __Repeat<N, A, Prepend<L, A>, Next<I>>
    1: L
}[Extends<Key<I>, N>]

/**
@hidden
*/
export type _Repeat<A extends any, N extends Number, L extends List = []> =
    __Repeat<N, A, L> extends infer X
    ? Cast<X, List>
    : never

/**
Fill a [[List]] with `N` times `A`
@param A to fill with
@param N to repeat it
@param L (?=`[]`) to be filled
@returns [[List]]
@example
```ts
```
*/
export type Repeat<A extends any, N extends Number, L extends List = []> =
    N extends unknown
    ? L extends unknown
      ? _Repeat<A, N, L>
      : never
    : never
