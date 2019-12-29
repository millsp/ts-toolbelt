import {_Omit} from '../Object/Omit'
import {HasAll} from '../Union/HasAll'
import {At} from '../Object/At'

/**
 * @hidden
 */
export type _ObjectOf<L extends object> =
    HasAll<keyof L, keyof any[]> extends 1     // check that is is an array
    ? [number] extends [At<L, 'length'>]       // ^^^ handles mixed up objs
      ? _Omit<L, Exclude<keyof any[], number>> // preserves arrays
      : _Omit<L, keyof any[]>                  // transforms tuples
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
