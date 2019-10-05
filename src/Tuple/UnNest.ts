import {Concat} from './Concat'
import {Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Tuple} from './Tuple'
import {UnionOf} from './UnionOf'
import {Key} from '../Iteration/Key'

type _UnNestCheap<T extends Tuple> =
   (UnionOf<T> extends infer UT     // make `T` a union
    ? UT extends unknown            // for each in union
        ? UT extends Tuple          // if its an array
        ? UnionOf<UT>               // make it a union
        : UT                        // or leave as it is
        : never
    : never)[]                      // make result array

type _UnNestExact<T extends Tuple, TN extends Tuple = [], I extends Iteration = IterationOf<'0'>> = {
    0: _UnNestExact<T, Concat<TN, T[Pos<I>]>, Next<I>>
    1: _UnNestExact<T, Append<TN, T[Pos<I>]>, Next<I>>
    2: TN
}[
    Key<I> extends Length<T, 's'>   // its the end
    ? 2
    : T[Pos<I>] extends Tuple       // element is tuple -> concat
      ? 0
      : 1                           // element is other -> Append
]

type _UnNest<T extends Tuple> =
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
    ? Cast<X, Tuple>
    : never
