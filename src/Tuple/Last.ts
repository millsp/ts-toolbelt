import {Tail} from './Tail'
import {Length} from './Length'

/** Get the last entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Last<T extends any[]> =
    T[Length<Tail<T>, 'n'>]
