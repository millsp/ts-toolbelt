import {NonNullableKeys} from './NonNullableKeys'
import {NonNullable} from './NonNullable'

/** Get the keys of **`O`** that are required
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<O extends object> =
    NonNullableKeys<NonNullable<O>>
    // required keys never are nullable
