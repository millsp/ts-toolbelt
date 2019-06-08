import {FilterKeys as OFilterKeys} from '../Object/FilterKeys'
import {Match} from '../Any/_Internal'
import {List} from '../_Internal'

/** Filter out the keys of **`T`** which entries match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 */
export type FilterKeys<T extends List, M extends any, match extends Match = 'default'> =
    OFilterKeys<T, M, match>
