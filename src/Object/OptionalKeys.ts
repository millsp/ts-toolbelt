import {NonNullable} from './NonNullable'
import {NullableKeys} from './NullableKeys'
import {Compute} from '../Any/Compute'
import {Index} from '../Any/Index'

/** Get the keys of **`O`** that are optional
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> =
    NullableKeys<NonNullable<O>> & keyof O & Index
    // optional keys always are nullable
