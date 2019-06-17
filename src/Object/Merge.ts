import {Omit} from './Omit'
import {Compute} from '../Any/Compute'
import {Cast} from '../Any/Cast'

/** Complete the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 */
export type Merge<O extends object, O1 extends object> =
    Compute<O & Omit<O1, keyof O>> extends infer X
    ? Cast<X, object>
    : never
