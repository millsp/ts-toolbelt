import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

/** Get the own keys of a **tuple**
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type Keys<T extends List> =
    Exclude<keyof T, keyof List> extends infer X
    ? Cast<X, keyof T>
    : never
