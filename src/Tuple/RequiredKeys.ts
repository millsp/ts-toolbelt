import {RequiredKeys as ORequiredKeys} from '../Object/RequiredKeys'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type RequiredKeys<T extends any[]> =
    Exclude<ORequiredKeys<T>, keyof any[]>
