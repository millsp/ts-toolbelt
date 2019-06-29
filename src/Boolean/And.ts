import {Format, FormatMap} from './_Internal'

/** Logical **`&&`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.And<true, false>        // true
 * type test1 = B.And<true & false, true> // false
 * type test2 = B.And<true | false, true> // boolean
 * ```
 */
export type And<B1 extends boolean, B2 extends boolean, fmt extends Format = 'b'> =
    (B1 & B2) extends false   // If one of them is false
    ? FormatMap[fmt][0]       // false
    : (B1 | B2) extends true  // If both of them are true
      ? FormatMap[fmt][1]     // true
      : FormatMap[fmt][0 | 1] // boolean
