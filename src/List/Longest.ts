import {Exclude} from '../Union/Exclude'
import {List} from './List'

/** Get the longest [[List]] of **`T`** & **`T1`**
 * (**`T`** has priority if both lengths are equal)
 * @param T to compare length
 * @param T1 to compare length
 * @returns **`T`** or **`T1`**
 * @example
 * ```ts
 * ```
 */
export type Longest<T extends List, T1 extends List> =
    [Exclude<keyof T1, keyof T>] extends [never]
    ? T
    : T1
