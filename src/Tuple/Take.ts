import {Number} from '../Number/Number'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Reverse} from './Reverse'
import {Prepend} from './Prepend'
import {Key} from '../Iteration/Key'
import {Way} from '../Iteration/_Internal'
import {Tuple} from './Tuple'

type _Take<T extends Tuple, N extends Number, TN extends Tuple = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Take<T, N, Prepend<TN, T[Pos<I>]>, Next<I>>
    1: TN
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Extract **`N`** entries out of **`T`**
 * @param T to extract from
 * @param N to extract out
 * @param way to extract from end (?='->')
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Take<T extends Tuple, N extends Number, way extends Way = '->'> = {
    '->': Reverse<_Take<T, N>>
    '<-': _Take<Reverse<T>, N>
}[way] extends infer X
? Cast<X, Tuple>
: never
