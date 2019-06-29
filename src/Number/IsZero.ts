import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Nbr} from './_Internal'
import {Extends} from '../Any/Extends'
import {Cast} from '../Any/Cast'

export type _IsZero<N extends Iteration> =
    Extends<N[4], '0'>

/** Check whether a **number** is null or not
 * @param N to check
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.IsZero<'0'>  // true
 * type test1 = N.IsZero<'-7'> // false
 * type test2 = N.IsZero<'7'>  // false
 * ```
 */
export type IsZero<N extends Nbr> =
    _IsZero<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
