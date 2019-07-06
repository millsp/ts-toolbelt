/** Get the own keys of an **`object`**
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<O extends object> =
    keyof O & (string | number | symbol)
    // Prevents `undefined` to appear in the keys
