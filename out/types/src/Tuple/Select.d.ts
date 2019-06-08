import { Match } from '../Any/_Internal';
import { Select as OSelect } from '../Object/Select';
import { Length } from './Length';
import { TupleOf } from '../Object/TupleOf';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Extract the entries of **`T`** that match **`M`**
 * @param T to extract from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`List`**
 * @example
 */
export declare type Select<T extends List, M extends any, match extends Match = 'default'> = TupleOf<OSelect<T, M, match>, Length<T, 's', 'max'>> extends infer X ? Cast<X, List> : never;
