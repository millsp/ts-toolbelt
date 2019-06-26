/** Add **`undefined`** to **`U`**
 * @param U to make nullable
 * @returns **union**
 * @example
 * ```ts
 * ```
 */
export type Nullable<U extends any> =
    U | undefined
