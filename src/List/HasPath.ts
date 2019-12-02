import {HasPath as OHasPath} from '../Object/HasPath'
import {Match} from '../Any/_Internal'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Check whether **`T`** has nested entries that match **`M`**
 * @param T to be inspected
 * @param Path to be followed
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type HasPath<T extends List, Path extends List<Index>, M extends any = any, match extends Match = 'default'> =
    OHasPath<ObjectOf<T>, Path, M, match>
