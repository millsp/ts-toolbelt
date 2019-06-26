import {Exclude} from './Exclude'
import {Last} from './Last'

/** Remove an item out of **`U`**
 * (⚠️ it might not preserve order)
 * @param U to remove from
 * @returns **union**
 * @example
 * ```ts
 * ```
 */
export type Pop<U extends any> =
    Exclude<U, Last<U>>
