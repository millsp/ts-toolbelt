/** Extract the part of **`U`** that match **`A`**
 * @param U to extract from
 * @param A to select with
 * @returns **union**
 * @example
 */
export type Select<U extends any, A extends any> =
    U extends A
    ? U
    : never
