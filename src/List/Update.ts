import {Key} from '../Any/Key'
import {List} from './List'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'

/** Update in **`L`** the entries of key **`K`** with **`A`**.
 * Use the [[x]] placeholder to get the current field type.
 * @param L to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Update<L extends List, K extends Key, A extends any> = {
    [P in keyof L]: P extends K
                    ? Replace<A, x, L[P]>
                    : L[P]
} & {}

