import {Assign as OAssign} from '../Object/Assign'
import {Omit} from './Omit'
import {List} from './List'
import {ObjectOf} from './ObjectOf'
import {Cast} from '../Any/Cast'

/** Assign a list of [[List]] into **`L`** with `Merge` (last-in overrides)
 * @param L to assign to
 * @param Ls to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<L extends List, Ls extends List[]> =
    Omit<OAssign<L, {[K in keyof Ls]: ObjectOf<Cast<Ls[K], List>>}> & [], keyof any[]>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
