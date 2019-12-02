import {Reverse} from './Reverse'
import {List} from './List'

/** Attach **`T1`** at the end of **`T`**
 * @param T to concat with
 * @param T1 to be attached
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Concat<T extends List, T1 extends List> =
    Reverse<Reverse<T>, T1>
