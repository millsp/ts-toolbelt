import {Tuple} from './Tuple'

/** Transform a [[Tuple]] into an [[Union]]
 * @param T to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<T extends Tuple> =
    T[number]
