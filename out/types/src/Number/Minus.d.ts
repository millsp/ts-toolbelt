import { IterationOf, Iteration } from '../Iteration/IterationOf';
import { Pos } from '../Iteration/Pos';
import { Prev } from '../Iteration/Prev';
import { Next } from '../Iteration/Next';
import { _IsNegative } from './IsNegative';
import { Cast } from '../Any/Cast';
import { Nbr } from './_Internal';
import { Format } from '../Iteration/_Internal';
declare type MinusPositive<N1 extends Iteration, N2 extends Iteration> = {
    0: MinusPositive<Prev<N1>, Prev<N2>>;
    1: N1;
    2: N2;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];
declare type MinusNegative<N1 extends Iteration, N2 extends Iteration> = {
    0: MinusNegative<Next<N1>, Next<N2>>;
    1: N1;
    2: N2;
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0];
export declare type _Minus<N1 extends Iteration, N2 extends Iteration> = _IsNegative<N2> extends true ? MinusNegative<N1, N2> : MinusPositive<N1, N2>;
/** Subtract a **number** from another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export declare type Minus<N1 extends Nbr, N2 extends Nbr, fmt extends Format = 's'> = _Minus<IterationOf<N1>, IterationOf<N2>> extends infer I ? Pos<Cast<I, Iteration>, fmt> : never;
export {};
