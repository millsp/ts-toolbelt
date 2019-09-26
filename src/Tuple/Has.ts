import {Match} from '../Any/_Internal'
import {Has as OHas} from '../Object/Has'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Check whether **`T`** has a entry of key **`K`** that matches **`M`**
 * @param T to be inspected
 * @param K to choose entry
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type Has<T extends Tuple, K extends Index, M extends any = any, match extends Match = 'default'> =
    OHas<ObjectOf<T>, K, M, match>
