/** Transform a **`boolean`** to **`0`** or **`1`**
 * @param B to transform
 * @returns **`0`** or **`1`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.NumberOf<true>    // 1
 * type test1 = B.NumberOf<false>   // 0
 * type test2 = B.NumberOf<boolean> // 0 | 1
 * ```
 */
export type NumberOf<B extends boolean> =
    B extends false
    ? 0
    : 1
