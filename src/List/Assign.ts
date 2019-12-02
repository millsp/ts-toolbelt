import {Assign as OAssign} from '../Object/Assign'
import {Omit} from './Omit'
import {List} from './List'
import {ObjectOf} from './ObjectOf'
import {Cast} from '../Any/Cast'

/** Assign a list of [[List]] into **`T`** with `Merge` (last-in overrides)
 * @param T to assign to
 * @param Ts to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<T extends List, Ts extends List[]> =
    Omit<OAssign<T, {[K in keyof Ts]: ObjectOf<Cast<Ts[K], List>>}> & [], keyof any[]>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
