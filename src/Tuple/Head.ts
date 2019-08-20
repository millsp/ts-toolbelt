import {Length} from './Length'

/** Get the first entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Head<T extends any[]> =
    Length<T> extends 0
    ? never
    : T[0]
