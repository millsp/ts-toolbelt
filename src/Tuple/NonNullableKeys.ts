import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type NonNullableKeys<T extends any[]> =
    ONonNullableKeys<T>
