import {Index} from '../_Internal'

/** Get the keys of an **`object`**
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<O extends object> =
    O extends unknown
    ? keyof O & Index
    : never
    // Prevents `undefined` to appear in the keys
