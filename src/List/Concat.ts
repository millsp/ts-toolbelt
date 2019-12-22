import {__Reverse} from './Reverse'
import {List} from './List'

/** Attach **`L1`** at the end of **`L`**
 * @param L to concat with
 * @param L1 to be attached
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Concat<L extends List, L1 extends List> =
    __Reverse<__Reverse<L>, L1>
