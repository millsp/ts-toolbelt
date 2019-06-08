import { Pick as OPick } from '../Object/Pick';
import { TupleOf } from '../Object/TupleOf';
import { Length } from './Length';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Extract out of **`T`** the entries of key **`K`**
 * @param T to extract from
 * @param K to chose entries
 * @returns **`List`**
 * @example
 */
export declare type Pick<T extends List, K extends string> = TupleOf<OPick<T, K>, Length<T, 's', 'max'>> extends infer X ? Cast<X, List> : never;
