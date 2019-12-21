import {PathUp as OPathUp} from '../Object/PathUp'
import {List} from './List'
import {Key} from '../Any/Key'

/** Get in **`O`** the type of nested properties.
 * It is able to deal with nested [[Union]]s.
 * @param L to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathUp<O extends List, Path extends List<Key>> =
    OPathUp<O, Path>
