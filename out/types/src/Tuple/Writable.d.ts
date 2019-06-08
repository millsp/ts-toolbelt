import { Depth } from '../Object/_Internal';
import { Writable as OWritable } from '../Object/Writable';
import { List } from '../_Internal';
import { Cast } from '../Any/Cast';
/** Make **`T`** writable (deeply or not)
 * @param T to make writable
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export declare type Writable<T extends List, depth extends Depth = 'flat'> = OWritable<T, keyof T, depth> extends infer X ? Cast<X, List> : never;
