import {Tuple} from './Tuple'
import {Clean as OClean} from '../Object/Clean'

/** Ensure that **`O`** is a proper **`object`**, even is it has been mixed up.
 * Sometimes, we can end up with mixed up **`objects`** that do not make sense
 * visually (or that could at least be simplified for the end user). This will
 * turn anything that is passed to it into a cleaned up **`object`**.
 *
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Clean<T extends Tuple> =
    OClean<T>
