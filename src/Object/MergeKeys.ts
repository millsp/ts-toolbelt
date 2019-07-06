import {Keys} from './Keys'

/** Get the keys of **`O` & `O1`**
 * @param O
 * @param O1
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type MergeKeys<O extends object, O1 extends object> =
    keyof (O & O1)
