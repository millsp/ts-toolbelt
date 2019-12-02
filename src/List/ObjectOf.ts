import {Omit as OOmit} from '../Object/Omit'
import {HasAll} from '../Union/_api'
import {True} from '../Boolean/Boolean'
import {Cast} from '../Any/Cast'

export type _ObjectOf<T extends object> =
    HasAll<keyof T, keyof any[]> extends True   // check that is is an array
    ? number extends (Cast<T, any[]>)['length'] // ^^^ handles mixed up objs
      ? OOmit<T, Exclude<keyof any[], number>>  // preserves arrays
      : OOmit<T, keyof any[]>                   // transforms tuples
    : T

/** Transform a [[List]] or an `Array` into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<T extends object> =
    T extends unknown
    ? _ObjectOf<T>
    : never
