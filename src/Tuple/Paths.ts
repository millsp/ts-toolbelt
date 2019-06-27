import {Paths as OPaths} from '../Object/Paths'

/** Get all the possible paths of **`T`**
 * (⚠️ this won't work with circular-refs)
 * @param T to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<T extends any[]> =
    OPaths<T>
