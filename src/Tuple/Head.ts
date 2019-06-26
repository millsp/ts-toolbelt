
/** Get the first entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Head<T extends any[]> =
    T extends [any, ...any[]]
    ? T[0]
    : never
