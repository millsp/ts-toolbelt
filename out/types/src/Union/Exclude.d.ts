/** Exclude **`A`** out of **`U`**
 * @param U to remove from
 * @param A to remove out
 * @returns **union**
 * @example
 */
export declare type Exclude<U extends any, A extends any> = U extends A ? never : U;
