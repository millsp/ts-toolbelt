import { IterationMap, Iteration } from './IterationOf';
/** Move **`I`**'s position forward
 * @param I to move
 * @returns **`Iteration`**
 * @example
 */
export declare type Next<I extends Iteration> = IterationMap[I[1]];
