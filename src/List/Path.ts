import {Path as OPath} from '../Object/Path'
import {Index} from '../Any/Index'
import {List} from './List'

/** Get in **`T`** the type of nested properties
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<T extends List, Path extends List<Index>> =
    OPath<T, Path>
