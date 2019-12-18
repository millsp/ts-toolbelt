import {NonNullableKeys} from './NonNullableKeys'
import {NonNullable} from './NonNullable'
import {Index} from '../Any/Index'

/** Get the keys of **`O`** that are required
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? never : K
}[keyof O] & keyof O & Index

