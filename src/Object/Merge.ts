import {Omit} from './Omit'
import {Compute} from '../Extras/Compute'

/** Complete the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 */
export type Merge<O extends object, O1 extends object> =
    Compute<O & Omit<O1, keyof O>>
// Exclude O out of O1 to avoid `Merge<{a?: number}, {a: string}>`
// In such case `_Merge` loses the `?` of `O` which has priority
// This happens when we do `keyof (O & O1)` and the keys overlap
// So we prevent overlapping first by excluding `O` out of `O1`
