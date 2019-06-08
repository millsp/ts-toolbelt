import { Exclude } from '../Union/Exclude';
import { List } from '../_Internal';
/** Get the longest **tuple** of **`T`** & **`T2`**
 * (**`T`** has priority if both lengths are equal)
 * @param T to compare length
 * @param T1 to compare length
 * @returns **`T1`** or **`T2`**
 * @example
 */
export declare type Longest<T extends List, T1 extends List> = Exclude<keyof T1, keyof T> extends never ? T : T1;
