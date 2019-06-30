import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {True, False} from '../Boolean/Boolean'

export type _IsNegative<N extends Iteration> = {
    '-': True
    '+': False
    '0': False
}[N[4]]

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
    _IsNegative<IterationOf<N>>
