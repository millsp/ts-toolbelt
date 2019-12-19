import {List} from './List'

/** Remove the first item out of a [[List]]
 * @param L
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Tail<L extends List> =
    ((...t: L) => any) extends ((head: any, ...tail: infer LTail) => any)
    ? LTail
    : never
