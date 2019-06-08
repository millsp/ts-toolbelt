import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Nbr} from './_Internal'
import {Extends} from '../Any/Extends'
import {Cast} from '../Any/Cast'

export type _IsZero<N extends Iteration> =
    Extends<N[4], '0'>

/** Check whether a **number** is null or not
 * @param N to check
 * @returns **`true`** or **`false`**
 * @example
 */
export type IsZero<N extends Nbr> =
    _IsZero<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
