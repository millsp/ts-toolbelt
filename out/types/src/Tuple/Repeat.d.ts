import { Next } from '../Iteration/Next';
import { Prepend } from './Prepend';
import { IterationOf, Iteration } from '../Iteration/IterationOf';
import { Nbr } from '../Number/_Internal';
import { Cast } from '../Any/Cast';
import { Key } from '../Iteration/Key';
import { List } from '../_Internal';
declare type _Repeat<N extends Nbr, A, T extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Repeat<N, A, Prepend<T, A>, Next<I>>;
    1: T;
}[N extends Key<I> ? 1 : 0];
/** Fill a **tuple** with **`N`** times **`A`**
 * @param A to fill with
 * @param N to repeat it
 * @param T to be filled (?=[])
 * @returns **`List`**
 * @example
 */
export declare type Repeat<A extends any, N extends Nbr, T extends List = []> = _Repeat<N, A, T> extends infer X ? Cast<X, List> : never;
export {};
