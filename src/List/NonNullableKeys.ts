import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`L`** that are non-nullable
 * @param L
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<L extends List> =
    ONonNullableKeys<ObjectOf<L>>
