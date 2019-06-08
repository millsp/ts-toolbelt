import { Tail } from './Tail';
import { Next } from '../Iteration/Next';
import { Reverse } from './Reverse';
import { Cast } from '../Any/Cast';
import { IterationOf, Iteration } from '../Iteration/IterationOf';
import { Nbr } from '../Number/_Internal';
import { Key } from '../Iteration/Key';
import { Way } from '../_Internal';
import { List } from '../_Internal';
declare type _Drop<T extends List, N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: _Drop<Tail<T>, N, Next<I>>;
    1: T;
}[N extends Key<I> ? 1 : 0];
/** Remove **`N`** entries out of **`T`**
 * @param T to remove from
 * @param N to remove out
 * @param way to remove from end (?='->')
 * @returns **`List`**
 * @example
 */
export declare type Drop<T extends List, N extends Nbr, way extends Way = '->'> = {
    '->': _Drop<T, N>;
    '<-': Reverse<_Drop<Reverse<T>, N>>;
}[way] extends infer X ? Cast<X, List> : never;
export {};
