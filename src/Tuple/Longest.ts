import {Exclude} from '../Union/Exclude'

/** Get the longest **tuple** of **`T`** & **`T2`**
 * (**`T`** has priority if both lengths are equal)
 * @param T to compare length
 * @param T1 to compare length
 * @returns **`T1`** or **`T2`**
 * @example
 * ```ts
 * ```
 */
export type Longest<T extends any[], T1 extends any[]> =
    Exclude<keyof T1, keyof T> extends never
    ? T
    : T1
