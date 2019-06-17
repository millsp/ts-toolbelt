import {Iteration} from './Iteration'
import {FormatMap, Format} from './_Internal'

/** Get the position of **`I`** (**string**)
 * @param I to query
 * @returns **`string`**
 * @example
 */
export type Key<I extends Iteration> =
    I[FormatMap['s']] // iteration position
