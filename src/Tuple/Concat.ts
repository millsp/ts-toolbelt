import {Reverse} from './Reverse'
import {Cast} from '../Any/Cast'

/** Attach **`T1`** at the end of **`T`**
 * @param T to concat with
 * @param T1 to be attached
 * @returns **`any[]`**
 * @example
 */
export type Concat<T extends any[], T1 extends any[]> =
    Reverse<Reverse<T>, T1> extends infer X
    ? Cast<X, any[]>
    : never
