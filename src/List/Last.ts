import {Tail} from './Tail'
import {Length} from './Length'
import {List} from './List'

/** Get the last entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Last<T extends List> =
    T[Length<Tail<T>>]
