import {List} from './List'

/** Transform a [[List]] into an [[Union]]
 * @param T to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<T extends List> =
    T[number]
