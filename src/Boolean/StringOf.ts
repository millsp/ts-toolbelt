/** Transform a **`boolean`** to **`true`** or **`false`**
 * @param B to transform
 * @returns **`'true'`** or **`'false'`**
 * @example
 * ```ts
 * type test0 = StringOf<true>    // 'true'
 * type test1 = StringOf<false>   // 'false'
 * type test2 = StringOf<boolean> // 'false' | 'true'
 * ```
 */
export type StringOf<B extends boolean> =
    B extends false
    ? 'false'
    : 'true'
