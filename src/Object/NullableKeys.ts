import {Index} from '../Any/Index'

/** Get the keys of **`O`** that are nullable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NullableKeys<O extends object> = {
    [K in keyof O]: [O[K] & (undefined | null)] extends [never]
                    ? never
                    : K
}[keyof O] & Index
