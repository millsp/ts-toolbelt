import {MergeKeys as OMergeKeys} from '../Object/MergeKeys'
import {ObjectOf} from './ObjectOf'

/** Get the keys of **`T` & `T1`**
 * @param T
 * @param T1
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type MergeKeys<T extends any[], T1 extends any[]> =
    OMergeKeys<ObjectOf<T>, T1>
