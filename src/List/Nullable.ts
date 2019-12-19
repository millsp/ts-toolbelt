import {Index} from '../Any/Index'
import {Cast} from '../Any/Cast'
import {Implements} from '../Any/Implements'
import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {ListOf} from '../Object/ListOf'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Make some entries of **`L`** nullable (deeply or not)
 * @param L to make nullable
 * @param K (?=`keyof O`) to choose entries
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<L extends List, K extends Index = keyof L, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<L, Index, depth>, List>
    0: ListOf<ONullable<ObjectOf<L>, K, depth>>
}[Implements<keyof L, K>]
