import { Merge as OMerge } from '../Merge';
import { Length } from '../../Tuple/Length';
import { Compute } from '../../Extras/Compute';
import { Iteration, IterationOf } from '../../Iteration/IterationOf';
import { Pos } from '../../Iteration/Pos';
import { Next } from '../../Iteration/Next';
import { Path as PPath } from './_Internal';
import { List } from '../../_Internal';
declare type _Merge<O extends object, Path extends List<string>, O1 extends object, I extends Iteration = IterationOf<'0'>> = {
    [K in keyof O]: K extends Path[Pos<I>] ? Pos<Next<I>> extends Length<Path> ? OMerge<O[K] & {}, O1> : Compute<_Merge<O[K] & {}, Path, O1, Next<I>>> : O[K];
};
export declare type Merge<O extends object, Path extends PPath, O1 extends object> = _Merge<O, Path, O1>;
export {};
