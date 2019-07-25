import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {True, False} from '../Boolean/Boolean'

export type _IsPositive<N extends Iteration> = {
    '-': False
    '+': True
    '0': False
}[N[4]]

/** Check whether a **`Number`** is positive or not
 * @param N to check
 * @returns **`Boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.IsPositive<'0'>  // False
 * type test1 = N.IsPositive<'-7'> // False
 * type test2 = N.IsPositive<'7'>  // True
 * ```
 */
export type IsPositive<N extends Number> =
    _IsPositive<IterationOf<N>>
