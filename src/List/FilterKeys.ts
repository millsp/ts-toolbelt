import {FilterKeys as OFilterKeys} from '../Object/FilterKeys'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Filter out the keys of **`T`** which entries match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match (?=`'default'`) to change precision
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type FilterKeys<T extends List, M extends any, match extends Match = 'default'> =
    OFilterKeys<ObjectOf<T>, M, match>
