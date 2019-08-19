/** Extract the part of **`U`** that matches **`M`**
 * @param U to extract from
 * @param M to select with
 * @returns **union**
 * @example
 * ```ts
 * ```
 */
export type Select<U extends any, M extends any> =
    U extends M
    ? U
    : never
