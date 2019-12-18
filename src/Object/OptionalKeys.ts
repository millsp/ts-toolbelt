import {NonNullable} from './NonNullable'
import {NullableKeys} from './NullableKeys'
import {Index} from '../Any/Index'

/** Get the keys of **`O`** that are optional
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? K : never
}[keyof O] & keyof O & Index
