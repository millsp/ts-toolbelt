/** Transform a **tuple** into an **union**
 * @param T to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<T> = T extends readonly any[]
    ? T[number]
    : (T extends any[] ? T[number] : T);
