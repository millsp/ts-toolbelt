/** Transform an **`object`** into an [[Union]]
 * @param O to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<O extends object> =
    O[keyof O]
