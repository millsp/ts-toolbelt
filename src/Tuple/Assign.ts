import {Assign as OAssign} from '../Object/Assign'
import {Omit} from './Omit'
import {Tuple} from './Tuple'

/** Assign a list of **tuple** into **`T`** with `Merge` (last-in overrides)
 * @param T to assign to
 * @param Ts to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<T extends Tuple, Ts extends Tuple[]> =
    Omit<OAssign<T, Ts> & [], keyof any[]>
