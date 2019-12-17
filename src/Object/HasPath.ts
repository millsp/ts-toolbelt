import {Match} from '../Any/_Internal'
import {Path as OPath} from './Path'
import {Is} from '../Any/Is'
import {Index} from '../Any/Index'
import {List} from '../List/List'

/** Check whether **`O`** has nested properties that match **`M`**
 * @param O to be inspected
 * @param Path to be followed
 * @param M (?=`any`) to check field type
 * @param match (?=`'default'`) to change precision
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type HasPath<O extends object, Path extends List<Index>, M extends any = any, match extends Match = 'default'> =
    Is<OPath<O, Path>, M, match>
