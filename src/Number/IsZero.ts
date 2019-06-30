import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {True, False} from '../Boolean/Boolean'

export type _IsZero<N extends Iteration> = {
    '-': False
    '+': False
    '0': True
}[N[4]]

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
    _IsZero<IterationOf<N>>
