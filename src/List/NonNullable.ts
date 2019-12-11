import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {ListOf} from '../Object/ListOf'
import {Cast} from '../Any/Cast'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'
import {List} from './List'

/** Make some entries of **`T`** not nullable (deeply or not)
 * @param T to make non nullable
 * @param K (?=`keyof O`) to choose fields
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type NonNullable<T extends List, K extends Index = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONonNullable<T, keyof T, depth>, List>
    0: ListOf<ONonNullable<ObjectOf<T>, K, depth>>
}[Implements<keyof T, K>]
