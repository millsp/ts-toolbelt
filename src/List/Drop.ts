import {Tail} from './Tail'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Key} from '../Iteration/Key'
import {Way} from '../Iteration/_Internal'
import {Reverse} from './Reverse'
import {List} from './List'

/**
 * @hidden
 */
type _Drop<L extends List, N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _Drop<Tail<L>, N, Next<I>>
    1: L
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Remove **`N`** entries out of **`L`**
 * @param L to remove from
 * @param N to remove out
 * @param way (?=`'->'`) to remove from end
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Drop<L extends List, N extends Number, way extends Way = '->'> = {
    '->': _Drop<L, N>
    '<-': Reverse<Drop<Reverse<L>, N>>
}[way] extends infer X
? Cast<X, List>
: never
