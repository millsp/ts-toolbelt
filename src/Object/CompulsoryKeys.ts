import {Keys} from '../Union/Keys'

/** Get the keys of **`O`** that are compulsory
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type CompulsoryKeys<O extends object> = {
    [K in keyof O]: [O[K] & (undefined | null)] extends [never]
                    ? K
                    : never
}[Keys<O>] & Keys<O>
