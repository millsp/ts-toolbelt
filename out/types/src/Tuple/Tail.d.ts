import { List } from '../_Internal';
/** Remove the first item out of a **tuple**
 * @param T
 * @returns **`List`**
 * @example
 */
export declare type Tail<T extends List> = ((...t: T) => any) extends ((_: any, ...tail: infer TTail) => any) ? TTail : never;
