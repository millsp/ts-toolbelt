import {NullableKeys as ONullableKeys} from '../Object/NullableKeys'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get the keys of **`T`** that are nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NullableKeys<T extends Tuple> =
    ONullableKeys<ObjectOf<T>>
