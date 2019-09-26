import {Match} from '../Any/_Internal'
import {Path as OPath} from './Path'
import {Is} from '../Any/Is'
import {Index} from '../Any/Index'
import {Tuple} from '../Tuple/Tuple'

/** Check whether **`O`** has nested properties that match **`M`**
 * @param O to be inspected
 * @param Path to be followed
 * @param M to check field type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type HasPath<O extends object, Path extends Tuple<Index>, M extends any = any, match extends Match = 'default'> =
    Is<OPath<O, Path>, M, match>
