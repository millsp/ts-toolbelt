import {Path as OPath} from '../Object/Path'
import {Index} from '../_Internal'

/** Get in **`T`** the type of nested properties
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<T extends any[], Path extends Index[]> =
    OPath<T, Path>
