import {Index} from '../_Internal'
import {Exclude} from '../Union/Exclude'

/** Get the keys of an **`object`**
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<O extends object> =
    keyof O & Index
    // Prevents `undefined` to appear in the keys
