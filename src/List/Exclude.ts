import {Match} from '../Any/_Internal'
import {ListOf} from '../Object/ListOf'
import {Exclude as OExclude} from '../Object/Exclude'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Exclude the entries of **`T1`** out of **`T`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to remove from
 * @param T1 to remove out
 * @param match (?=`'default'`) to change precision
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Exclude<T extends List, T1 extends List, match extends Match = 'default'> =
    ListOf<OExclude<ObjectOf<T>, ObjectOf<T1>, match>>
