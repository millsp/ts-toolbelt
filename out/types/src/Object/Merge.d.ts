import { Omit } from './Omit';
import { Compute } from '../Extras/Compute';
/** Complete the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 */
export declare type Merge<O extends object, O1 extends object> = Compute<O & Omit<O1, keyof O>>;
