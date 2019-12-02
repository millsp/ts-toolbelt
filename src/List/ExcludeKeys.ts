import {ExcludeKeys as OExcludeKeys} from '../Object/ExcludeKeys'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Exclude the keys of **`T1`** out of the keys of **`T`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to remove the keys from
 * @param T1 to remove the keys out
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ExcludeKeys<T extends List, T1 extends List, match extends Match = 'default'> =
    OExcludeKeys<ObjectOf<T>, ObjectOf<T1>, match>
