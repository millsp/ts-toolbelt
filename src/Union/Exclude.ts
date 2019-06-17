/** Remove **`M`** out of **`U`**
 * @param U to remove from
 * @param M to remove out
 * @returns **union**
 * @example
 */
export type Exclude<U extends any, M extends any> =
    U extends M
    ? never
    : U
