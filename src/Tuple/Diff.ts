import {Diff as ODiff} from '../Object/Diff'
import {TupleOf} from '../Object/TupleOf'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get a **tuple** that is the difference between **`T`** & **`T1`**
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
export type Diff<T extends Tuple, T1 extends Tuple, match extends Match = 'default'> =
    TupleOf<(ODiff<ObjectOf<T>, ObjectOf<T1>, match>) extends infer X ? X & {} : never>
    // !\  allowed bypassing excessive instantiation (because of too many nested types)
