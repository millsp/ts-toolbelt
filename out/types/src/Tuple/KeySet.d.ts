import { Nbr } from '../Number/_Internal';
import { Range } from '../Number/Range';
import { UnionOf } from '../Tuple/UnionOf';
import { Cast } from '../Any/Cast';
/** Create a set of keys
 * @param From to start with
 * @param To to end with
 * @returns **`keyof`**
 * @example
 */
export declare type KeySet<From extends Nbr, To extends Nbr> = UnionOf<Range<From, To, '->'>> extends infer X ? Cast<X, string> : never;
