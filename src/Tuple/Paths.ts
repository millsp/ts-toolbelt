import {Paths as OPaths} from '../Object/Paths'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get all the possible paths of **`T`**
 * (⚠️ this won't work with circular-refs)
 * @param T to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<T extends Tuple> =
    OPaths<ObjectOf<T>>
