import {Keys} from './Keys'

/** Transform an **`object`** into an **union**
 * @param O to transform
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type UnionOf<O extends object> =
    O[Keys<O>]
