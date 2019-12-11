import {Filter as OFilter} from '../Object/Filter'
import {ListOf} from '../Object/ListOf'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Filter out of **`T`** the entries that match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match (?=`'default'`) to change precision
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Filter<T extends List, M extends any, match extends Match = 'default'> =
    ListOf<OFilter<ObjectOf<T>, M, match>>
