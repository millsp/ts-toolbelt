import {Diff as ODiff} from '../Object/Diff'
import {ListOf} from '../Object/ListOf'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get a [[List]] that is the difference between **`T`** & **`T1`**
 * (**`T`**'s differences have priority over **`T1`**'s if entries overlap)
 * (If `match = 'default'`, no type checks are done)
 * @param T to check differences with
 * @param T1 to check differences against
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Diff<T extends List, T1 extends List, match extends Match = 'default'> =
    ListOf<ODiff<ObjectOf<T>, ObjectOf<T1>, match>>
