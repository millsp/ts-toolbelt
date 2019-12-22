import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type _Reverse<L extends List, LO extends List, I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<L, Prepend<LO, L[Pos<I>]>, Next<I>>
    1: LO
}[
    Pos<I> extends Length<L>
    ? 1
    : 0
]

/** Turn a [[List]] the other way around
 * @param L to reverse
 * @param LO (?=`[]`) to prepend to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Reverse<L extends List, LO extends List = []> =
    _Reverse<Naked<L>, LO> extends infer X
    ? Cast<X, List>
    : never
