import {Omit as OOmit} from '../Object/Omit'
import {HasAll} from '../Union/HasAll'
import {True} from '../Boolean/Boolean'
import {At} from '../Object/At'

export type _ObjectOf<L extends object> =
    HasAll<keyof L, keyof any[]> extends True  // check that is is an array
    ? [number] extends [At<L, 'length'>]       // ^^^ handles mixed up objs
      ? OOmit<L, Exclude<keyof any[], number>> // preserves arrays
      : OOmit<L, keyof any[]>                  // transforms tuples
    : L

/** Transform a [[List]] or an `Array` into an **`object`**
 * @param L to transform
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<L extends object> =
    L extends unknown
    ? _ObjectOf<L>
    : never
