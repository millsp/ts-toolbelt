import {Keys} from './Keys'
import {Pick} from './Pick'

/** Get the keys of **`O`** that are required
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? never : K
}[Keys<O>]
