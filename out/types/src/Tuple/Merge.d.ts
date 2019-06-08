import { Longest } from './Longest';
import { List } from '../_Internal';
/** Complete the entries of **`T`** with the ones of **`T1`**
 * @param T to complete
 * @param T1 to copy from
 * @returns **`List`**
 * @example
 */
export declare type Merge<T extends List, T1 extends List> = T1 extends Longest<T, T1> ? {
    [K in keyof T1]: K extends keyof T ? T[K] : T1[K];
} : T;
