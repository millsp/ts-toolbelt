import {Omit} from '../Object/Omit'

/** Transform a **tuple** into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 */
export type ObjectOf<T extends any[]> =
    Omit<T, keyof any[]>
