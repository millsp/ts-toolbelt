import {Assign as OAssign} from '../Object/Assign'
import {Omit} from './Omit'
import {Tuple} from './Tuple'
import {ObjectOf} from './ObjectOf'
import {Cast} from '../Any/Cast'

/** Assign a list of [[Tuple]] into **`T`** with `Merge` (last-in overrides)
 * @param T to assign to
 * @param Ts to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<T extends Tuple, Ts extends Tuple[]> =
    Omit<OAssign<T, {[K in keyof Ts]: ObjectOf<Cast<Ts[K], Tuple>>}> & [], keyof any[]>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
