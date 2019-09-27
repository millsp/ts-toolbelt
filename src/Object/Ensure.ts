import {Tuple} from '../Tuple/Tuple'
import {Omit} from './Omit'

/** Ensure that **`O`** is an object. If **`O`** is an **`array`**, only its own
 * keys will be kept. It works like **`ObjectOf`**, but on a **`object`** level.
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 */
export type Ensure<O extends object> =
    O extends Tuple
    ? Omit<O, keyof any[]>
    : O
