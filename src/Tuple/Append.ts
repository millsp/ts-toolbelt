import {Concat} from './Concat'
import {List} from '../_Internal'

/** Add an element **`A`** at the end of **`T`**
 * @param T to append to
 * @param A to be added to
 * @returns **`List`**
 * @example
 */
export type Append<T extends List, A extends any> =
    Concat<T, [A]>

