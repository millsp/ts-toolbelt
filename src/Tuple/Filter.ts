import {Filter as OFilter} from '../Object/Filter'
import {TupleOf} from '../Object/TupleOf'
import {Match} from '../Any/_Internal'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {ObjectOf} from './ObjectOf'

/** Filter out of **`T`** the entries that match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Filter<T extends any[], M extends any, match extends Match = 'default'> =
    TupleOf<OFilter<ObjectOf<T>, M, match>>
