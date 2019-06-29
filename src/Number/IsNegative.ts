import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Nbr} from './_Internal'
import {Extends} from '../Any/Extends'
import {Cast} from '../Any/Cast'

export type _IsNegative<N extends Iteration> =
    Extends<N[4], '-'>

/** Check whether a **number** is negative or not
 * @param N to check
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.IsNegative<'0'>  // false
 * type test1 = N.IsNegative<'-7'> // true
 * type test2 = N.IsNegative<'7'>  // false
 * ```
 */
export type IsNegative<N extends Nbr> =
    _IsNegative<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
