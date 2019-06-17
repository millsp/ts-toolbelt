import {RequiredKeys as ORequiredKeys} from '../Object/RequiredKeys'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type RequiredKeys<T extends any[]> =
    ORequiredKeys<T>
