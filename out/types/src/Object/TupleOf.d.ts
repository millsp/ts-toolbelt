import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Prepend } from '../Tuple/Prepend';
import { Prev } from '../Iteration/Prev';
import { Nbr } from '../Number/_Internal';
import { Cast } from '../Any/Cast';
import { Key } from '../Iteration/Key';
import { List } from '../_Internal';
declare type PickIfEntry<O extends object, TN extends List, I extends Iteration> = Key<I> extends keyof O ? Prepend<TN, O[Cast<Key<I>, keyof O>]> : TN;
declare type _TupleOf<O extends object, TN extends List, I extends Iteration> = {
    0: _TupleOf<O, PickIfEntry<O, TN, I>, Prev<I>>;
    1: TN;
}['-1' extends Key<I> ? 1 : 0];
/** Transform an **`object`** into a **tuple**
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @param LastK last index to pick
 * @returns **`List`**
 * @example
 */
export declare type TupleOf<O extends object, LastK extends Nbr> = _TupleOf<O, [], IterationOf<LastK>> extends infer X ? Cast<X, List> : never;
export {};
