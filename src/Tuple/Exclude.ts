import {Match} from '../Any/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {Exclude as OExclude} from '../Object/Exclude'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

/** Exclude the entries of **`T1`** out of **`T`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to remove from
 * @param T1 to remove out
 * @param match to change precision (?=`'default'`)
 * @returns **`List`**
 * @example
 */
export type Exclude<T extends List, T1 extends List, match extends Match = 'default'> =
    TupleOf<OExclude<T, T1, match>, Length<T, 's', 'max'>> extends infer X
    ? Cast<X, List>
    : never
