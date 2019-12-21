import {Keys} from '../Union/Keys'

/** Get the keys of **`O`** that are required
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? never : K
}[Keys<O>] & Keys<O>

