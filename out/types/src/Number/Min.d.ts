import { Pos } from '../Iteration/Pos';
import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Next } from '../Iteration/Next';
import { Nbr, Numbers } from './_Internal';
import { Format } from '../Iteration/_Internal';
import { Cast } from '../Any/Cast';
import { Key } from '../Iteration/Key';
import { Prev } from '../Iteration/Prev';
import { Equals } from '../Any/Equals';
import { _IsPositive } from './IsPositive';
import { Exclude } from '../Union/Exclude';
declare type MinPositive<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MinPositive<N, Next<I>>;
    1: I;
}[N extends Key<I> ? 1 : 0];
declare type MinNegative<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MinNegative<Exclude<N, Key<I>>, Prev<I>>;
    1: Next<I>;
}[Equals<N, never> extends true ? 1 : 0];
export declare type _Min<N extends Iteration> = _IsPositive<N> extends true ? MinPositive<Key<N>> : MinNegative<Exclude<Key<N>, Numbers['string']['+']>>;
/** Get the smallest **number** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export declare type Min<N extends Nbr, fmt extends Format = 's'> = _Min<IterationOf<N>> extends infer I ? Pos<Cast<I, Iteration>, fmt> : never;
export {};
