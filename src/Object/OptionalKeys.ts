import {Keys} from './Keys'
import {Pick} from './Pick'

/** Get the keys of **`O`** that are optional
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> = {
    [K in Keys<O>]: {} extends Pick<O, K> ? K : never
}[Keys<O>]
