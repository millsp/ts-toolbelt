import {Assign as OAssign} from '../Object/Assign'
import {Omit} from './Omit'

/** Assign a list of **tuple** into **`T`** (last-in overrides)
 * @param T to assign to
 * @param Ts to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<T extends any[], Ts extends any[][]> =
    Omit<OAssign<T, Ts> & [], keyof any[]>
