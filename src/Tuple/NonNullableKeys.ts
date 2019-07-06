import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<T extends any[]> =
    Exclude<ONonNullableKeys<T>, keyof any[]>
