import {Match} from '../Any/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {Exclude as OExclude} from '../Object/Exclude'
import {Length} from './Length'

/** Exclude the entries of **`T1`** out of **`T`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to remove from
 * @param T1 to remove out
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Exclude<T extends any[], T1 extends any[], match extends Match = 'default'> =
    TupleOf<OExclude<T, T1, match>>
