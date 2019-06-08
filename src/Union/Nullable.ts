/** Add **`undefined`** to **`U`**
 * @param U to make nullable
 * @returns **union**
 * @example
 */
export type Nullable<U extends any> =
    U | undefined
