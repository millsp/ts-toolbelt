/** Get the keys of a **union**
 * @param U
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<U extends any> =
    U extends unknown
    ? keyof U
    : never
