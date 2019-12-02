import {OptionalKeys as OOptionalKeys} from '../Object/OptionalKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** that are optional
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<T extends List> =
    OOptionalKeys<ObjectOf<T>>
