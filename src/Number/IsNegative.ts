import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {True, False} from '../Boolean/Boolean'

export type _IsNegative<N extends Iteration> = {
    '-': True
    '+': False
    '0': False
}[N[4]]

/** Check whether a **`Number`** is negative or not
 * @param N to check
 * @returns **`Boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.IsNegative<'0'>  // False
 * type test1 = N.IsNegative<'-7'> // True
 * type test2 = N.IsNegative<'7'>  // False
 * ```
 */
export type IsNegative<N extends Number> =
    _IsNegative<IterationOf<N>>
