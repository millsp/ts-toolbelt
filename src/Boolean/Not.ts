import {Format} from './_Internal'
import {Fmt} from './Fmt'
import {Boolean} from './Boolean'

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
export type Not<B extends Boolean> = {
    0: 1
    1: 0
}[B]
