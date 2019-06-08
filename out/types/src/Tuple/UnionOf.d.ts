import { List } from '../_Internal';
/** Transform a **tuple** into an **union**
 * @param T to transform
 * @returns **`any`**
 * @example
 */
export declare type UnionOf<T extends List> = T[number];
