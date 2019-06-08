import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Prepend } from '../Tuple/Prepend';
import { Pos } from '../Iteration/Pos';
import { Prev } from '../Iteration/Prev';
import { Next } from '../Iteration/Next';
import { Nbr } from './_Internal';
import { Cast } from '../Any/Cast';
import { Format } from '../Iteration/_Internal';
import { Way } from '../_Internal';
import { List } from '../_Internal';
declare type RangeForth<From extends Iteration, To extends Iteration, fmt extends Format = 's', T extends List = []> = {
    0: RangeForth<Prev<From>, To, fmt, Prepend<T, Pos<From, fmt>>>;
    1: T;
}[From extends To ? 1 : 0];
declare type RangeBack<From extends Iteration, To extends Iteration, fmt extends Format = 's', T extends List = []> = {
    0: RangeBack<Next<From>, To, fmt, Prepend<T, Pos<From, fmt>>>;
    1: T;
}[From extends To ? 1 : 0];
export declare type _Range<From extends Iteration, To extends Iteration, way extends Way, fmt extends Format> = {
    '->': RangeForth<To, Prev<From>, fmt>;
    '<-': RangeBack<From, Next<To>, fmt>;
}[way];
/** Create a range of **number**s
 * @param From to start with
 * @param To to end with
 * @param way to reverse it (?='->')
 * @param fmt output (?=`'s'`)
 * @returns **`(number | string)[]`**
 * @example
 */
export declare type Range<From extends Nbr, To extends Nbr, way extends Way = '->', fmt extends Format = 's'> = _Range<IterationOf<From>, IterationOf<To>, way, fmt> extends infer X ? Cast<X, List> : never;
export {};
