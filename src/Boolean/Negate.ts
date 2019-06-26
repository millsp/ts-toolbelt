import {Not} from './Not'

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
export type Negate<B extends boolean> =
    Not<B>
