import {FilterKeys as OFilterKeys} from '../Object/FilterKeys'
import {Match} from '../Any/_Internal'
import {Exclude} from '../Union/Exclude'
import {ObjectOf} from './ObjectOf'

/** Filter out the keys of **`T`** which entries match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type FilterKeys<T extends any[], M extends any, match extends Match = 'default'> =
    OFilterKeys<ObjectOf<T>, M, match>
