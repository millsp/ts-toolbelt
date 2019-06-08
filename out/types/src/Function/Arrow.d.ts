import { List } from '../_Internal';
/** Alias to create a **`Function`**
 * @param P parameters
 * @param R return type
 * @returns **`Function`**
 * @example
 */
export declare type Arrow<P extends List = any, R extends any = any> = (...args: P) => R;
