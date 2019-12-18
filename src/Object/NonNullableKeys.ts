import {Index} from '../Any/Index'

/** Get the keys of **`O`** that are non-nullable
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<O extends object> = {
    [K in keyof O]: [O[K] & (undefined | null)] extends [never]
                    ? K
                    : never
}[keyof O] & keyof O & Index
