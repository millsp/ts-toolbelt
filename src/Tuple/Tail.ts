
/** Remove the first item out of a **tuple**
 * @param T
 * @returns **`any[]`**
 * @example
 */
export type Tail<T extends any[]> =
    ((...t: T) => any) extends ((head: any, ...tail: infer TTail) => any)
    ? TTail
    : never
