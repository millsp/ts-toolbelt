import {GreaterEq} from './GreaterEq'
import {Nbr} from './_Internal'

/** Check if a **number** is lower or equal to another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.LowerEq<'7', '5'> // false
 * type test1 = N.LowerEq<'5', '5'> // true
 * type test2 = N.LowerEq<'5', '7'> // true
 * ```
 */
export type LowerEq<N1 extends Nbr, N2 extends Nbr> =
    GreaterEq<N2, N1>
