import {WritableKeys as OWritableKeys} from '../Object/WritableKeys'

/** Get the keys of **`O`** that are writable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type WritableKeys<T extends any[]> =
    Exclude<OWritableKeys<T>, keyof any[]>
