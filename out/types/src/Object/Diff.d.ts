import { Merge } from './Merge';
import { Exclude } from './Exclude';
import { Match } from '../Any/_Internal';
/** Get an **`object`** that is the difference between **`O`** & **`O1`**
 * (**`O`**'s differences have priority over **`O1`**'s if fields overlap)
 * (If `match = 'default'`, no type checks are done)
 * @param O to check differences with
 * @param O1 to check differences against
 * @param match to change precision (?=`'default'`)
 * @returns **`object`**
 * @example
 */
export declare type Diff<O extends object, O1 extends object, match extends Match = 'default'> = Merge<Exclude<O, O1, match>, Exclude<O1, O, match>>;
