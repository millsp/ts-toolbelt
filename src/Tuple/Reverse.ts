import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Max} from '../Number/Max'
import {Key} from '../Iteration/Key'

export type _Reverse<T extends any[], TO extends any[] = [], L = Max<Length<T, 's'>>, I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<T, Prepend<TO, T[Pos<I>]>, Next<I>>
    1: TO
}[
    Key<I> extends L
    ? 1
    : 0
]

/** Turn a **tuple** the other way around
 * @param T to reverse
 * @param TO to append to (?=[])
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Reverse<T extends any[], TO extends any[] = []> =
    _Reverse<T, TO> extends infer X
    ? Cast<X, any[]>
    : never
