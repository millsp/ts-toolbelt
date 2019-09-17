import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get the keys of **`T`** that are non-nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<T extends Tuple> =
    ONonNullableKeys<ObjectOf<T>>
