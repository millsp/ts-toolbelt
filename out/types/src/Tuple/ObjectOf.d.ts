import { Omit } from '../Object/Omit';
import { List } from '../_Internal';
/** Transform a **tuple** into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 */
export declare type ObjectOf<T extends List> = Omit<T, keyof List>;
