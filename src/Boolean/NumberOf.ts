/** Transform a **`boolean`** to **`0`** or **`1`**
 * @param B to transform
 * @returns **`0`** or **`1`**
 * @example
 * ```ts
 * type test0 = NumberOf<true>    // 1
 * type test1 = NumberOf<false>   // 0
 * type test2 = NumberOf<boolean> // 0 | 1
 * ```
 */
export type NumberOf<B extends boolean> =
    B extends false
    ? 0
    : 1
