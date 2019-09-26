import {Path as OPath} from '../Object/Path'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get in **`T`** the type of nested properties
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<T extends Tuple, Path extends Tuple<Index>> =
    OPath<ObjectOf<T>, Path>
