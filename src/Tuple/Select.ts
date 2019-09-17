import {Match} from '../Any/_Internal'
import {Select as OSelect} from '../Object/Select'
import {TupleOf} from '../Object/TupleOf'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Extract the entries of **`T`** that match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Select<T extends Tuple, M extends any, match extends Match = 'default'> =
    TupleOf<OSelect<ObjectOf<T>, M, match>>
