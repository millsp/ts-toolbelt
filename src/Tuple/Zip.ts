import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Prepend} from './Prepend'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {Pos} from '../Iteration/Pos'
import {Reverse} from './Reverse'
import {Cast} from '../Any/Cast'

type _Zip<T extends any[], T1 extends any[], TN extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Zip<T, T1, Prepend<TN, [T[Pos<I>], T1[Pos<I>]]>, Next<I>>
    1: Reverse<TN>
}[
    Pos<I> extends Length<T>
    ? 1
    : 0
]

/** Pair up the entries of **`T`** with **`T1`**
 * @param T to pair up
 * @param T1 to pair up with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Zip<T extends any[], T1 extends any[]> =
    _Zip<T, T1> extends infer X
    ? Cast<X, any[]>
    : never
