import {Next} from '../Iteration/Next'
import {Prepend} from './Prepend'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {List} from './List'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type _Repeat<N extends Number, A, L extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Repeat<N, A, Prepend<L, A>, Next<I>>
    1: L
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Fill a [[List]] with **`N`** times **`A`**
 * @param A to fill with
 * @param N to repeat it
 * @param L (?=`[]`) to be filled
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Repeat<A extends any, N extends Number, L extends List = []> =
    _Repeat<N, A, Naked<L>> extends infer X
    ? Cast<X, List>
    : never
