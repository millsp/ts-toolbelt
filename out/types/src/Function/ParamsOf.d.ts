import { Arrow } from './Arrow';
/** Extract parameters from a **`Function`**
 * @param F to extract from
 * @returns **`List`**
 * @example
 */
export declare type ParamsOf<F extends Arrow> = F extends ((...args: infer T) => any) ? T : never;
