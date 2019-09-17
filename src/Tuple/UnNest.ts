import {Concat} from './Concat'
import {Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Filter} from './Filter'
import {Tuple} from './Tuple'

type _UnNestCheap<T extends Tuple> =
    T extends Array<infer ST>
    ? ST extends Array<any>
      ? Concat<
            Filter<T, Array<any>>, // join the parent of all arrays  - without its sub-arrays
            ST                     // to the union of its sub arrays - without its parent-items
        >
      : never
    : T

type _UnNestExact<T extends Tuple, TN extends Tuple = [], I extends Iteration = IterationOf<'0'>> = {
    0: _UnNestExact<T, Concat<TN, T[Pos<I>]>, Next<I>>
    1: _UnNestExact<T, Append<TN, T[Pos<I>]>, Next<I>>
    2: TN
}[
    Pos<I> extends Length<T>  // its the end
    ? 2
    : T[Pos<I>] extends any[] // element is tuple -> concat
      ? 0
      : 1                     // element is other -> Append
]

export type _UnNest<T extends Tuple> =
    number extends Length<T>
    ? _UnNestCheap<T>
    : _UnNestExact<T>

/** Remove a dimension of **`T`**
 * @param T to un-nest
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type UnNest<T extends Tuple> =
    _UnNest<T> extends infer X
    ? Cast<X, any[]>
    : never
