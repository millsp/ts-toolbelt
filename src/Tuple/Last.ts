import {Tail} from './Tail'
import {Length} from './Length'
import {Tuple} from './Tuple'

/** Get the last entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Last<T extends Tuple> =
    T[Length<Tail<T>, 'n'>]
