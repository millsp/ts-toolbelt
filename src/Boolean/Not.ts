import {Format, FormatMap} from './_Internal'

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
export type Not<B extends boolean, fmt extends Format = 'b'> =
    B extends false
    ? FormatMap[fmt][1] // true
    : FormatMap[fmt][0] // false
