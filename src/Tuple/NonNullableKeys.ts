import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'
import {List} from '../_Internal'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type NonNullableKeys<T extends List> =
    ONonNullableKeys<T>
