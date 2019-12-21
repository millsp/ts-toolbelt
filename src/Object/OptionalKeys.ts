import {Keys} from '../Union/Keys'

/** Get the keys of **`O`** that are optional
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? K : never
}[Keys<O>] & Keys<O>
