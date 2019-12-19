import {HasPath as OHasPath} from '../Object/HasPath'
import {Match} from '../Any/_Internal'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Check whether **`L`** has nested entries that match **`M`**
 * @param L to be inspected
 * @param Path to be followed
 * @param M (?=`any`) to check entry type
 * @param match (?=`'default'`) to change precision
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type HasPath<L extends List, Path extends List<Index>, M extends any = any, match extends Match = 'default'> =
    OHasPath<ObjectOf<L>, Path, M, match>
