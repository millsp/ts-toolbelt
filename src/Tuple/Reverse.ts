import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Max} from '../Number/Max'
import {Key} from '../Iteration/Key'
import {Number} from '../Number/Number'
import {Tuple} from './Tuple'

export type _Reverse<T extends Tuple, TO extends Tuple = [], L extends Number = Max<Length<T, 's'>>, I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<T, Prepend<TO, T[Pos<I>]>, L, Next<I>>
    1: TO
}[
    L extends Key<I>
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
export type Reverse<T extends Tuple, TO extends Tuple = []> =
    _Reverse<T, TO> extends infer X
    ? Cast<X, Tuple>
    : never
