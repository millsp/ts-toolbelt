import {OptionalKeys as OOptionalKeys} from '../Object/OptionalKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`L`** that are optional
 * @param L
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<L extends List> =
    OOptionalKeys<ObjectOf<L>>
