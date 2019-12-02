import {NullableKeys as ONullableKeys} from '../Object/NullableKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** that are nullable
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NullableKeys<T extends List> =
    ONullableKeys<ObjectOf<T>>
