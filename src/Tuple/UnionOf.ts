/** Transform a **tuple** into an **union**
 * @param T to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<T extends any[]> =
    T[number]
