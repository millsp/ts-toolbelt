import {Match} from '../Any/_Internal'
import {Includes as OIncludes} from '../Object/Includes'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Check whether **`T`** has entries that match **`M`**
 * @param T to be inspected
 * @param M to check entry type
 * @param match to change precision (?=`'default'`)
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type Includes<T extends Tuple, M extends any, match extends Match = 'default'> =
    OIncludes<ObjectOf<T>, M, match>
