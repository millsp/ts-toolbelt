import {List} from './List'

/** Remove the first item out of a [[List]]
 * @param T
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Tail<T extends List> =
    ((...t: T) => any) extends ((head: any, ...tail: infer TTail) => any)
    ? TTail
    : never
