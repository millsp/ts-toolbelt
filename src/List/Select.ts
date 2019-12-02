import {Match} from '../Any/_Internal'
import {Select as OSelect} from '../Object/Select'
import {ListOf} from '../Object/ListOf'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Extract the entries of **`T`** that match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Select<T extends List, M extends any, match extends Match = 'default'> =
    ListOf<OSelect<ObjectOf<T>, M, match>>
