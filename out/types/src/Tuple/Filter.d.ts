import { Filter as OFilter } from '../Object/Filter';
import { TupleOf } from '../Object/TupleOf';
import { Match } from '../Any/_Internal';
import { Length } from './Length';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Filter out of **`T`** the entries that match **`M`**
 * @param T to remove from
 * @param M to select entries
 * @param match to change precision (?=`'default'`)
 * @returns **`List`**
 * @example
 */
export declare type Filter<T extends List, M extends any, match extends Match = 'default'> = TupleOf<OFilter<T, M, match>, Length<T, 's', 'max'>> extends infer X ? Cast<X, List> : never;
