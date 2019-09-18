import {Index} from '../_Internal'
import {Exclude} from '../Union/Exclude'
import {Tuple} from './Tuple'

/** Get the keys of a **tuple**
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<T extends Tuple> =
    T extends unknown
    ? Exclude<keyof T, keyof any[]> & Index | number
    : never
    // We re-include `number`, it is an 'own key'
