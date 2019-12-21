import {Key} from '../Any/Key'
import {Cast} from '../Any/Cast'
import {Implements} from '../Any/Implements'
import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {ListOf} from '../Object/ListOf'
import {ObjectOf} from './ObjectOf'
import {List} from './List'
import {Keys} from './Keys'

/** Make some entries of **`L`** nullable (deeply or not)
 * @param L to make nullable
 * @param K (?=`any`) to choose fields
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<L extends List, K extends Key = any, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<L, Key, depth>, List>
    0: ListOf<ONullable<ObjectOf<L>, K, depth>>
}[Implements<Keys<L>, K>]
