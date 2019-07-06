import {NullableKeys as ONullableKeys} from '../Object/NullableKeys'

/** Get the keys of **`T`** that are nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NullableKeys<T extends any[]> =
    Exclude<ONullableKeys<T>, keyof any[]>
