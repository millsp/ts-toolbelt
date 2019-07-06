import {Index} from '../_Internal'

/** Get the own keys of a **tuple**
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<T extends any[]> =
    keyof T & Index
