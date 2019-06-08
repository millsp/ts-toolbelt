import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf, Iteration} from '../Iteration/IterationOf'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

export type _Reverse<T extends List, TO extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<T, Prepend<TO, T[Pos<I>]>, Next<I>>
    1: TO
}[
    Pos<I> extends Length<T, 'n', 'max'>
    ? 1
    : 0
]

/** Turn a **tuple** the other way around
 * @param T to reverse
 * @param TO to append to (?=[])
 * @returns **`List`**
 * @example
 */
export type Reverse<T extends List, TO extends List = []> =
    _Reverse<T, TO> extends infer X
    ? Cast<X, List>
    : never
