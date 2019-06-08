/** Transform an **`object`** into an **union**
 * @param O to transform
 * @returns **`any`**
 * @example
 */
export declare type UnionOf<O extends object> = O[keyof O];
