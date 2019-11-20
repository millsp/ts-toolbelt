import {PathUp as OPathUp} from '../Object/PathUp'
import {Tuple} from './Tuple'
import {Index} from '../Any/Index'

/** Get in **`O`** the type of nested properties.
 * It is able to deal with nested [[Union]]s.
 * @param T to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathUp<O extends Tuple, Path extends Tuple<Index>> =
    OPathUp<O, Path>
