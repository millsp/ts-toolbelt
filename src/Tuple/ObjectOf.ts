import {Omit as OOmit} from '../Object/Omit'
import {Tuple} from './Tuple'

/** Transform a **tuple** into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<T extends Tuple> =
    OOmit<T, keyof any[]>
