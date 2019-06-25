import {Not} from './Not'

/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 * ```ts
 * type test0 = Negate<true>  // false
 * type test1 = Negate<false> // true
 * ```
 */
export type Negate<B extends boolean> =
    Not<B>
