import {RequiredKeys as ORequiredKeys} from '../Object/RequiredKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<T extends List> =
    ORequiredKeys<ObjectOf<T>>
