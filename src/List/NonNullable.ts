import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {ListOf} from '../Object/ListOf'
import {Cast} from '../Any/Cast'
import {Key} from '../Any/Key'
import {ObjectOf} from './ObjectOf'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'
import {List} from './List'

/** Make some entries of **`L`** not nullable (deeply or not)
 * @param L to make non nullable
 * @param K (?=`any`) to choose fields
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type NonNullable<L extends List, K extends Key = any, depth extends Depth = 'flat'> = {
    1: Cast<ONonNullable<L, any, depth>, List>
    0: ListOf<ONonNullable<ObjectOf<L>, K, depth>>
}[Implements<Keys<L>, K>]
