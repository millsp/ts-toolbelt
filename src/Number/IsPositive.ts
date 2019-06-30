import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {True, False} from '../Boolean/Boolean'

export type _IsPositive<N extends Iteration> = {
    '-': False
    '+': True
    '0': False
}[N[4]]

/** Check whether a **number** is positive or not
 * @param N to check
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.IsPositive<'0'>  // false
 * type test1 = N.IsPositive<'-7'> // false
 * type test2 = N.IsPositive<'7'>  // true
 * ```
 */
export type IsPositive<N extends Nbr> =
    _IsPositive<IterationOf<N>>
