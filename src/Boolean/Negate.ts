import {Not} from './Not'
import {Format} from './_Internal'
import {Boolean} from './_Boolean'

/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Negate<true>  // false
 * type test1 = B.Negate<false> // true
 * ```
 */
export type Negate<B extends Boolean, fmt extends Format = 'b'> =
    Not<B, fmt>
