import {Match} from '../Any/_Internal'
import {Has as OHas} from '../Object/Has'
import {Index} from '../_Internal'
import {ObjectOf} from './ObjectOf'

/** Check whether **`T`** has a entry of key **`K`** that matches **`M`**
 * @param T to be inspected
 * @param K to choose entry
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * ```
 */
export type Has<T extends any[], K extends Index, M extends any = any, match extends Match = 'default'> =
    OHas<ObjectOf<T>, K, M, match>
