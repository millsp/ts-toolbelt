import { IterationOf, Iteration } from '../Iteration/IterationOf';
import { Next } from '../Iteration/Next';
import { Pos } from '../Iteration/Pos';
import { Length } from '../Tuple/Length';
import { At } from './At';
import { Cast } from '../Any/Cast';
import { NonNullable as UNonNullable } from '../Union/NonNullable';
declare type _Path<O, Path extends string[], I extends Iteration = IterationOf<'0'>> = {
    0: _Path<UNonNullable<At<Cast<O, object>, Path[Pos<I>]>>, Path, Next<I>>;
    1: O;
}[Pos<I> extends Length<Path> ? 1 : 0];
/** Get in **`O`** the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 */
export declare type Path<O extends object, Path extends string[]> = _Path<O, Path> extends infer X ? Cast<X, any> : never;
export {};
