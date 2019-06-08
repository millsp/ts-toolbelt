import { IterationOf, IterationMap } from '../Iteration/IterationOf';
import { Pos } from '../Iteration/Pos';
/** Transform a **`string`** into a **`number`**
 * @param S to transform
 * @returns **`number`**
 * @example
 */
export declare type NumberOf<N extends string> = N extends keyof IterationMap ? Pos<IterationOf<N>> : number;
