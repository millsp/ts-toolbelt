import {ReadonlyKeys as OReadonlyKeys} from '../Object/ReadonlyKeys'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ReadonlyKeys<T extends any[]> =
    OReadonlyKeys<T>
