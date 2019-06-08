import {Equals} from '../Any/Equals'
import {_Greater} from './Greater'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Nbr} from './_Internal'
import {Cast} from '../Any/Cast'

export type _GreaterEq<N1 extends Iteration, N2 extends Iteration> =
    Equals<N1, N2> extends true // It's equal
    ? true
    : _Greater<N1, N2>

/** Check if a **number** is greater or equal to another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 */
export type GreaterEq<N1 extends Nbr, N2 extends Nbr> =
    _GreaterEq<IterationOf<N1>, IterationOf<N2>> extends infer X
    ? Cast<X, boolean>
    : never
