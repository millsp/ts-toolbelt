import { Iteration } from './IterationOf';
import { FormatMap, Format } from './_Internal';
/** Get the position of **`I`** (**string**)
 * @param I to query
 * @param fmt output (?=`'s'`)
 * @returns **`string`**
 * @example
 */
export declare type Key<I extends Iteration, fmt extends Format = 's'> = I[FormatMap[fmt]];
