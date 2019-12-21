import {Pick as OPick} from '../Object/Pick'
import {ListOf} from '../Object/ListOf'
import {Key} from '../Any/Key'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Extract out of **`L`** the entries of key **`K`**
 * @param L to extract from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pick<L extends List, K extends Key> =
    ListOf<OPick<ObjectOf<L>, K>>
