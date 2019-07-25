import {Path as OPath} from '../Object/Path'
import {Index} from '../_Internal'
import {ObjectOf} from './ObjectOf'

/** Get in **`T`** the type of nested properties
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<T extends any[], Path extends Index[]> =
    OPath<ObjectOf<T>, Path>
