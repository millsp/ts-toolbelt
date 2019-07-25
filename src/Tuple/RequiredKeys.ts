import {RequiredKeys as ORequiredKeys} from '../Object/RequiredKeys'
import {ObjectOf} from './ObjectOf'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<T extends any[]> =
    ORequiredKeys<ObjectOf<T>>
