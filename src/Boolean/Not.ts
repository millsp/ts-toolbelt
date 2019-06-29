import {Format} from './_Internal'
import {Fmt} from './Fmt'
import {Boolean} from './_Boolean'

/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Not<true>  // false
 * type test1 = B.Not<false> // true
 * ```
 */
export type Not<B extends Boolean, fmt extends Format = 'b'> = {
    0: Fmt<1, fmt>
    1: Fmt<0, fmt>
}[B]
