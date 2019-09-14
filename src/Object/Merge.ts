import {Omit} from './Omit'
import {Compute} from '../Any/Compute'

type _Merge<O extends object, O1 extends object> =
  Compute<O & Omit<O1, keyof O>>

/** Complete the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, O1 extends object> =
    _Merge<O, O1>
    // We make sure keys do NOT overlap
    // Otherwise we'd loose field meta
