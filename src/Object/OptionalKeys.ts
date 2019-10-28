import {NonNullable} from './NonNullable'
import {NullableKeys} from './NullableKeys'

/** Get the keys of **`O`** that are optional
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> =
    NullableKeys<NonNullable<O>>
    // optional keys always are nullable
