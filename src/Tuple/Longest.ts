import {Exclude} from '../Union/Exclude'
import {Tuple} from './Tuple'

/** Get the longest **tuple** of **`T`** & **`T1`**
 * (**`T`** has priority if both lengths are equal)
 * @param T to compare length
 * @param T1 to compare length
 * @returns **`T`** or **`T1`**
 * @example
 * ```ts
 * ```
 */
export type Longest<T extends Tuple, T1 extends Tuple> =
    [Exclude<keyof T1, keyof T>] extends [never]
    ? T
    : T1
