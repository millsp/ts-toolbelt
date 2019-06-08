import {IterationMap, Iteration} from './IterationOf'

/** Move **`I`**'s position forward
 * @param I to move
 * @returns **`Iteration`**
 * @example
 */
export type Next<I extends Iteration> =
    IterationMap[I[1]] // continues iterating
