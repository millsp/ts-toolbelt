import {_Greater} from './Greater'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Nbr} from './_Internal'
import {Cast} from '../Any/Cast'

export type _Lower<N1 extends Iteration, N2 extends Iteration> =
    _Greater<N2, N1>

/** Check if a **number** is lower than another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 */
export type Lower<N1 extends Nbr, N2 extends Nbr> =
    _Lower<IterationOf<N1>, IterationOf<N2>> extends infer X
    ? Cast<X, boolean>
    : never
