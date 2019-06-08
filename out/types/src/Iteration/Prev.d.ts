import { IterationMap, Iteration } from './IterationOf';
/** Move **`I`**'s position backwards
 * @param I to move
 * @returns **`Iteration`**
 * @example
 */
export declare type Prev<I extends Iteration> = IterationMap[I[0]];
