import {Concat} from './Concat'
import {Cast} from '../Any/Cast'

/** Add an element **`A`** at the end of **`T`**
 * @param T to append to
 * @param A to be added to
 * @returns **`any[]`**
 * @example
 */
export type Append<T extends any[], A extends any> =
    Concat<T, [A]> extends infer X
    ? Cast<X, any[]>
    : never
