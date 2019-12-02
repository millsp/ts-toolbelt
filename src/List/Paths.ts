import {Paths as OPaths} from '../Object/Paths'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get all the possible paths of **`T`**
 * (⚠️ this won't work with circular-refs)
 * @param T to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<T extends List> =
    OPaths<ObjectOf<T>>
