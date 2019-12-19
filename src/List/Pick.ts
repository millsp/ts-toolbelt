import {Pick as OPick} from '../Object/Pick'
import {ListOf} from '../Object/ListOf'
import {Index} from '../Any/Index'
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
export type Pick<L extends List, K extends Index> =
    ListOf<OPick<ObjectOf<L>, K>>
