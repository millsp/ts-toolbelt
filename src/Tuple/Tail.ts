import {Tuple} from './Tuple'

/** Remove the first item out of a **tuple**
 * @param T
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Tail<T extends Tuple> =
    ((...t: T) => any) extends ((head: any, ...tail: infer TTail) => any)
    ? TTail
    : never
