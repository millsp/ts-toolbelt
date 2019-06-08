import { Merge } from './Merge';
/** Update the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 */
export declare type Overwrite<O extends object, O1 extends object> = Merge<O1, O>;
