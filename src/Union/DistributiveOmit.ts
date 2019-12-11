/** Remove out from each member of union **`U`** the fields of key **`K`**
 * @param U to remove from
 * @param K to chose fields
 * @returns **union**
 * @example
 * ```ts
 * import {U} from 'ts-toolbelt'
 *
 * type T = { type: 'foo'; other: number } | { type: 'bar'; other: string }
 * type test0 = U.DistributiveOmit<T, 'other'> // { type: 'foo' } | { type: 'bar' }
 * ```
 */
export type DistributiveOmit<U, K> = U extends any ? Pick<U, Exclude<keyof U, K>> : never
