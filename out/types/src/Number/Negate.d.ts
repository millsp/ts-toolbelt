import { _Minus } from './Minus';
import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Pos } from '../Iteration/Pos';
import { Cast } from '../Any/Cast';
import { Nbr } from './_Internal';
import { Format } from '../Iteration/_Internal';
export declare type _Negate<N extends Iteration> = _Minus<IterationOf<'0'>, N>;
/** Negate a **number**
 * @param N to negate
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export declare type Negate<N extends Nbr, fmt extends Format = 's'> = _Negate<IterationOf<N>> extends infer I ? Pos<Cast<I, Iteration>, fmt> : never;
