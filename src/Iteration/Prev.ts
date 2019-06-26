import {IterationMap} from './IterationOf'
import {Iteration} from './Iteration'

/** Move **`I`**'s position backwards
 * @param I to move
 * @returns **`Iteration`**
 * @example
 * ```ts
 * ```
 */
export type Prev<I extends Iteration> =
    IterationMap[I[0]] // continues iterating
