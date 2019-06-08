import { Exclude } from './Exclude';
/** Get an **union** that is the difference between **`U1`** & **`U2`**
 * @param U1 to check differences with
 * @param U2 to check differences against
 * @returns **union**
 * @example
 */
export declare type Diff<U1, U2> = Exclude<U1, U2> | Exclude<U2, U1>;
