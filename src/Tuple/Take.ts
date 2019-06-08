import {Nbr} from '../Number/_Internal'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Reverse} from './Reverse'
import {Prepend} from './Prepend'
import {Key} from '../Iteration/Key'
import {Way} from '../_Internal'
import {List} from '../_Internal'

type _Take<T extends List, N extends Nbr, TN extends List = [], I extends Iteration = IterationOf<'0'>> = {
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
 * @returns **`List`**
 * @example
 */
export type Take<T extends List, N extends Nbr, way extends Way = '->'> = {
    '->': Reverse<_Take<T, N>>
    '<-': _Take<Reverse<T>, N>
}[way] extends infer X
? Cast<X, List>
: never
