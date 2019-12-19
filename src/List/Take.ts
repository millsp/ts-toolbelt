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
import {List} from './List'

/**
 * @hidden
 */
type _Take<L extends List, N extends Number, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Take<L, N, Prepend<LN, L[Pos<I>]>, Next<I>>
    1: LN
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Extract **`N`** entries out of **`L`**
 * @param L to extract from
 * @param N to extract out
 * @param way (?=`'->'`) to extract from end
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Take<L extends List, N extends Number, way extends Way = '->'> = {
    '->': Reverse<_Take<L, N>>
    '<-': _Take<Reverse<L>, N>
}[way] extends infer X
? Cast<X, List>
: never
