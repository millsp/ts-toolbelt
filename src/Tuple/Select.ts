import {Match} from '../Any/_Internal'
import {Select as OSelect} from '../Object/Select'
import {Length} from './Length'
import {TupleOf} from '../Object/TupleOf'

/** Extract the entries of **`T`** that match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Select<T extends any[], M extends any, match extends Match = 'default'> =
    TupleOf<OSelect<T, M, match>, Length<T, 's'>>
