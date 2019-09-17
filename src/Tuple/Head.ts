import {Length} from './Length'
import {Tuple} from './Tuple'

/** Get the first entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Head<T extends Tuple> =
    Length<T> extends 0
    ? never
    : T[0]
