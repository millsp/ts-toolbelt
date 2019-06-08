import { Iteration } from './IterationOf';
import { Format, FormatMap } from './_Internal';
/** Get the position of **`I`** (**number**)
 * @param I to query
 * @param fmt output (?=`'n'`)
 * @returns **`number`**
 * @example
 */
export declare type Pos<I extends Iteration, fmt extends Format = 'n'> = I[FormatMap[fmt]];
