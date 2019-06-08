import { Length } from '../../Tuple/Length';
import { Compute } from '../../Extras/Compute';
import { Iteration, IterationOf } from '../../Iteration/IterationOf';
import { Pos } from '../../Iteration/Pos';
import { Next } from '../../Iteration/Next';
import { List } from '../../_Internal';
import { Path as PPath } from './_Internal';
declare type _Update<O extends object, Path extends List<string>, A, I extends Iteration = IterationOf<'0'>> = {
    [K in keyof O]: K extends Path[Pos<I>] ? Pos<Next<I>> extends Length<Path> ? A : Compute<_Update<O[K] & {}, Path, A, Next<I>>> : O[K];
};
export declare type Update<O extends object, Path extends PPath, A extends any> = _Update<O, Path, A>;
export {};
