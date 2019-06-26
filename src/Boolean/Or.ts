/** Logical **`||`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Or<true, false>    // true
 * type test1 = B.Or<true, true>     // true
 * type test2 = B.Or<boolean, false> // boolean
 * ```
 */
export type Or<B1 extends boolean, B2 extends boolean> =
    (B1 | B2) extends false  // If both of them are false
    ? false
    : (B1 & B2) extends true // If one of them is true
      ? true
      : boolean
