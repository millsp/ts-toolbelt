import {Exclude} from '../Union/Exclude'

/** Get the own keys of an **`object`**
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<O extends object> =
    Exclude<keyof O, keyof any[]> // ! important
