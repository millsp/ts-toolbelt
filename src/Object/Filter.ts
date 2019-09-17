import {FilterKeys} from './FilterKeys'
import {Match} from '../Any/_Internal'
import {Pick} from './Pick'

/** Filter out of **`O`** the fields that match **`M`**
 * @param O to remove from
 * @param M to select fields
 * @param match to change precision (?=`'default'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Filter<O extends object, M extends any, match extends Match = 'default'> =
    Pick<O, FilterKeys<O, M, match>>

