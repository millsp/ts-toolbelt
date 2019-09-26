import {AssignUp as OAssignUp} from '../Object/AssignUp'
import {Omit} from './Omit'
import {Tuple} from './Tuple'

/** Assign a list of **tuple** into **`T`** with `MergeUp` (last-in combines or overrides)
 * @param T to assign to
 * @param Ts to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type AssignUp<T extends Tuple, Ts extends Tuple[]> =
    Omit<OAssignUp<T, Ts> & [], keyof any[]>
