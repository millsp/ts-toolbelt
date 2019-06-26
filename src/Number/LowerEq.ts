import {_GreaterEq} from './GreaterEq'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {Cast} from '../Any/Cast'

export type _LowerEq<N1 extends Iteration, N2 extends Iteration> =
    _GreaterEq<N2, N1>

/** Check if a **number** is lower or equal to another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * ```
 */
export type LowerEq<N1 extends Nbr, N2 extends Nbr> =
    _LowerEq<IterationOf<N1>, IterationOf<N2>> extends infer X
    ? Cast<X, boolean>
    : never
