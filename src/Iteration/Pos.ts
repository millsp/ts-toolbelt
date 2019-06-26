import {Iteration} from './Iteration'
import {Format, FormatMap} from './_Internal'

/** Get the position of **`I`** (**number**)
 * @param I to query
 * @returns **`number`**
 * @example
 * ```ts
 * ```
 */
export type Pos<I extends Iteration> =
    I[FormatMap['n']] // iteration position
