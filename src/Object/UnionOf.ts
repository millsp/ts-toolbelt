/** Transform an **`object`** into an **union**
 * @param O to transform
 * @returns **`any`**
 * @example
 */
export type UnionOf<O extends object> =
    O[keyof O]
