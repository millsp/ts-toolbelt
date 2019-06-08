import { Arrow } from './Arrow';
import { List } from '../_Internal';
/** Extract the return type of a **`Function`**
 * @param F to extract from
 * @returns **`any`**
 * @example
 */
export declare type ReturnOf<F extends Arrow> = F extends ((...args: List) => infer R) ? R : never;
