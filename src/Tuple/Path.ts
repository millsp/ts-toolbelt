import {Path as OPath} from '../Object/Path'

/** Get in **`T`** the type of nested properties
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<T extends any[], Path extends string[]> =
    OPath<T, Path>
