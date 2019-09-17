import {Tuple} from './Tuple'

/** Transform a **tuple** into an **union**
 * @param T to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<T extends Tuple> =
    T[number]
