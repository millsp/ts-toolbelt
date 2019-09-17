import {Reverse} from './Reverse'
import {Tuple} from './Tuple'

/** Attach **`T1`** at the end of **`T`**
 * @param T to concat with
 * @param T1 to be attached
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Concat<T extends Tuple, T1 extends Tuple> =
    Reverse<Reverse<T>, T1>
