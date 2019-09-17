import {ExcludeKeys as OExcludeKeys} from '../Object/ExcludeKeys'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

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
export type ExcludeKeys<T extends Tuple, T1 extends Tuple, match extends Match = 'default'> =
    OExcludeKeys<ObjectOf<T>, ObjectOf<T1>, match>
