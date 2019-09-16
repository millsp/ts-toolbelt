import {At} from './At'

/** Make the fields of **`O`** union the ones of **`O1`**
 * @param O to union from
 * @param O1 to union with
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] | At<O1, K>
}
