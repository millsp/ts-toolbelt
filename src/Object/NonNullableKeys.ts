import {Keys} from '../Union/Keys'

/** Get the keys of **`O`** that are non-nullable
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type NonNullableKeys<O extends object> = {
    [K in keyof O]: [O[K] & (undefined | null)] extends [never]
                    ? K
                    : never
}[Keys<O>] & Keys<O>
