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
    Exclude<keyof T, keyof any[]> & keyof T | number
    // We re-include `number`, it is an 'own key'
