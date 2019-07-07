import {SelectKeys} from './SelectKeys'

/** Get the keys of **`O`** that are nullable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NullableKeys<O extends object> =
    SelectKeys<O, undefined, 'rextends'>
    | SelectKeys<O, null, 'rextends'>
