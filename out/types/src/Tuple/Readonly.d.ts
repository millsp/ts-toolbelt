import { Depth } from '../Object/_Internal';
import { Readonly as OReadonly } from '../Object/Readonly';
import { List } from '../_Internal';
import { Cast } from '../Any/Cast';
/** Make **`T`** readonly (deeply or not)
 * @param T to make readonly
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export declare type Readonly<T extends List, depth extends Depth = 'flat'> = OReadonly<T, keyof T, depth> extends infer X ? Cast<X, List> : never;
