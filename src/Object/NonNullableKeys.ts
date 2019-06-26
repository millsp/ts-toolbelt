import {FilterKeys} from './FilterKeys'

/** Get the keys of **`O`** that are non-nullable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<O extends object> =
    FilterKeys<O, undefined, 'loose'>
    & FilterKeys<O, null, 'loose'>
