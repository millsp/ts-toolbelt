import {Exclude} from './Exclude'

/** Remove **`M`** out of **`U`**
 * @param U to remove from
 * @param M to remove out
 * @returns **union**
 * @example
 * ```ts
 * ```
 */
export type Filter<U extends any, M extends any> =
    Exclude<U, M>
