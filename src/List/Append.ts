import {Concat} from './Concat'
import {List} from './List'

/** Add an element **`A`** at the end of **`L`**
 * @param L to append to
 * @param A to be added to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Append<L extends List, A extends any> =
    Concat<L, [A]>
