/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 * ```ts
 * type test0 = Not<true>  // false
 * type test1 = Not<false> // true
 * ```
 */
export type Not<B extends boolean> =
    B extends false
    ? true
    : false
