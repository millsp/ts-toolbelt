import { Match } from '../Any/_Internal';
import { IntersectKeys as OIntersectKeys } from '../Object/IntersectKeys';
import { List } from '../_Internal';
/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`keyof`**
 * @example
 */
export declare type IntersectKeys<T extends List, T1 extends List, match extends Match = 'default'> = OIntersectKeys<T, T1, match>;
