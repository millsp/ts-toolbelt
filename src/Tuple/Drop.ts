import {Tail} from './Tail'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Key} from '../Iteration/Key'
import {Way} from '../Iteration/_Internal'
import {Reverse} from './Reverse'
import {Tuple} from './Tuple'

type _Drop<T extends Tuple, N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _Drop<Tail<T>, N, Next<I>>
    1: T
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Remove **`N`** entries out of **`T`**
 * @param T to remove from
 * @param N to remove out
 * @param way to remove from end (?='->')
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Drop<T extends Tuple, N extends Number, way extends Way = '->'> = {
    '->': _Drop<T, N>
    '<-': Reverse<Drop<Reverse<T>, N>>
}[way] extends infer X
? Cast<X, Tuple>
: never
