import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<T extends List> =
    ONonNullableKeys<ObjectOf<T>>
