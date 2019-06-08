import { List } from '../_Internal';
/** Get the first entry of **`T`**
 * @param T to extract from
 * @returns **`any`**
 * @example
 */
export declare type Head<T extends List> = T extends [any, ...List] ? T[0] : never;
