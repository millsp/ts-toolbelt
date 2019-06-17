import {Concat} from './Concat'
import {Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'

type _UnNest<T extends any[], TN extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _UnNest<T, Concat<TN, T[Pos<I>]>, Next<I>>
    1: _UnNest<T, Append<TN, T[Pos<I>]>, Next<I>>
    2: TN
}[

    Pos<I> extends Length<T>
    ? 2
    : T[Pos<I>] extends any[]
      ? 0
      : 1
]

/** Remove a dimension of **`T`**
 * @param T to un-nest
 * @returns **`any[]`**
 * @example
 */
export type UnNest<T extends any[]> =
    _UnNest<T> extends infer X
    ? Cast<X, any[]>
    : never
