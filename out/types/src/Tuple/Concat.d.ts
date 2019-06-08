import { Cast } from '../Any/Cast';
import { Reverse } from './Reverse';
import { List } from '../_Internal';
/** Attach **`T1`** at the end of **`T`**
 * @param T to concat with
 * @param T1 to be attached
 * @returns **`List`**
 * @example
 */
export declare type Concat<T extends List, T1 extends List = []> = Reverse<Reverse<T>, T1> extends infer X ? Cast<X, List> : never;
