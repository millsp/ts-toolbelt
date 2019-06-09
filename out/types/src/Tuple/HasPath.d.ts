import { HasPath as OHasPath } from '../Object/HasPath';
import { Match } from '../Any/_Internal';
import { List } from '../_Internal';
/** Check whether **`T`** has nested entries that match **`M`**
 * @param T to be inspected
 * @param Path to be followed
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type HasPath<T extends List, Path extends string[], M extends any = any, match extends Match = 'default'> = OHasPath<T, Path, M, match>;
