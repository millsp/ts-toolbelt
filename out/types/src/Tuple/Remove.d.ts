import { Nbr } from '../Number/_Internal';
import { KeySet } from './KeySet';
import { Omit } from './Omit';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
/** Remove out of **`T`** a range of entries
 * @param T to remove from
 * @param From to start with
 * @param To to end with
 * @returns **`List`**
 * @example
 */
export declare type Remove<T extends List, From extends Nbr, To extends Nbr> = Omit<T, KeySet<From, To>> extends infer X ? Cast<X, List> : never;
