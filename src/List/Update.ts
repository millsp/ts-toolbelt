import {Index} from '../Any/Index'
import {List} from './List'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'

/** Update in **`T`** the entries of key **`K`** with **`A`**.
 * Use the [[x]] placeholder to get the current field type.
 * @param T to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Update<T extends List, K extends Index, A extends any> = {
    [P in keyof T]: P extends K
                    ? Replace<A, x, T[P]>
                    : T[P]
} & {}

