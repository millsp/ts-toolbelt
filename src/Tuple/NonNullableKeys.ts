import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'
import {ObjectOf} from './ObjectOf'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<T extends any[]> =
    ONonNullableKeys<ObjectOf<T>>
