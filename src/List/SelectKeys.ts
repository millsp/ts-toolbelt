import {Match} from '../Any/_Internal'
import {SelectKeys as OSelectKeys} from '../Object/SelectKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** which entries match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type SelectKeys<T extends List, M extends any, match extends Match = 'default'> =
    OSelectKeys<ObjectOf<T>, M, match>
