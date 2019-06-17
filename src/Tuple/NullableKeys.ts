import {NullableKeys as ONullableKeys} from '../Object/NullableKeys'

/** Get the keys of **`T`** that are nullable
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type NullableKeys<T extends any[]> =
    ONullableKeys<T>
