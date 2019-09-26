import {Index} from '../Any/Index'

type _Pick<O extends object, K extends keyof O> = {
    [P in K]: O[P]
} & {}

/** Extract out of **`O`** the fields of key **`K`**
 * @param O to extract from
 * @param K to chose fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, K extends Index> =
    O extends unknown
    ? _Pick<O, K & keyof O>
    : never
