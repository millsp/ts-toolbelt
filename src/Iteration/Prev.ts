import {IterationMap, Iteration} from './IterationOf'

/** Move **`I`**'s position backwards
 * @param I to move
 * @returns **`Iteration`**
 * @example
 */
export type Prev<I extends Iteration> =
    IterationMap[I[0]] // continues iterating
