import {Length} from './Length'
import {List} from './List'

/** Get the first entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Head<T extends List> =
    Length<T> extends 0
    ? never
    : T[0]
