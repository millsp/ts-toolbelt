import { Equals } from '../Any/Equals';
import { Intersect } from './Intersect';
/** Check whether **`U`** contains **`A`** or not
 * (Note that **`U`** & **`A`** can be swapped)
 * @param U to be inspected
 * @param A to check existence
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Has<U extends any, A extends any> = Equals<Intersect<U, A>, never> extends true ? false : true;
