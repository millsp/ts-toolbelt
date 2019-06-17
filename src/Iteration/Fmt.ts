import {Iteration} from './Iteration'
import {Format, FormatMap} from './_Internal'

/** Is **`Key`** and **`Pos`** in a single type
 * @param I to query
 * @param fmt output
 * @returns **`string`** or **`number`**
 * @example
 */
export type Fmt<I extends Iteration, fmt extends Format> =
    I[FormatMap[fmt]]
