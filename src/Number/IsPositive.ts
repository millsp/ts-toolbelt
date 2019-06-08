import {_IsNegative} from './IsNegative'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Nbr} from './_Internal'
import {Extends} from '../Any/Extends'
import {Cast} from '../Any/Cast'

export type _IsPositive<N extends Iteration> =
    Extends<N[4], '+'>

/** Check whether a **number** is positive or not
 * @param N to check
 * @returns **`true`** or **`false`**
 * @example
 */
export type IsPositive<N extends Nbr> =
    _IsPositive<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
