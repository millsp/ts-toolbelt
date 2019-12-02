import {Omit as OOmit} from '../Object/Omit'
import {Tuple} from './Tuple'

export type _ObjectOf<T extends Tuple> =
    number extends T['length']
    ? OOmit<T, Exclude<keyof any[], number>> // preserves arrays
    : OOmit<T, keyof any[]>                  // transforms tuples

/** Transform a [[Tuple]] into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<T extends Tuple> =
    T extends unknown
    ? _ObjectOf<T>
    : never
