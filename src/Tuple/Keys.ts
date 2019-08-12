import {Index} from '../_Internal'

/** Get the keys of a **tuple**
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<T extends any[]> =
    Exclude<keyof T, keyof any[]> & Index | number
    // We re-include `number`, it is an 'own key'
