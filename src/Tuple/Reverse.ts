import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'

export type _Reverse<T extends any[], TO extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<T, Prepend<TO, T[Pos<I>]>, Next<I>>
    1: TO
}[
    Pos<I> extends Length<T>
    ? 1
    : 0
]

/** Turn a **tuple** the other way around
 * @param T to reverse
 * @param TO to append to (?=[])
 * @returns **`any[]`**
 * @example
 */
export type Reverse<T extends any[], TO extends any[] = []> =
    _Reverse<T, TO> extends infer X
    ? Cast<X, any[]>
    : never
