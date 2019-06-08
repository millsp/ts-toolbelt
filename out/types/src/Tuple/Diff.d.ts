import { Diff as ODiff } from '../Object/Diff';
import { TupleOf } from '../Object/TupleOf';
import { Longest } from './Longest';
import { Match } from '../Any/_Internal';
import { Length } from './Length';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Get a **tuple** that is the difference between **`T`** & **`T1`**
 * (**`T`**'s differences have priority over **`T1`**'s if entries overlap)
 * (If `match = 'default'`, no type checks are done)
 * @param T to check differences with
 * @param T1 to check differences against
 * @param match to change precision (?=`'default'`)
 * @returns **`List`**
 * @example
 */
export declare type Diff<T extends List, T1 extends List, match extends Match = 'default'> = TupleOf<ODiff<T, T1, match>, Length<Longest<T, T1>, 's', 'max'>> extends infer X ? Cast<X, List> : never;
