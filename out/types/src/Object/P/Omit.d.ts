import { Length } from '../../Tuple/Length';
import { Compute } from '../../Extras/Compute';
import { Iteration, IterationOf } from '../../Iteration/IterationOf';
import { Pos } from '../../Iteration/Pos';
import { Next } from '../../Iteration/Next';
import { Select } from '../Select';
import { Path as PPath } from './_Internal';
import { List } from '../../_Internal';
declare type _Omit<O extends object, Path extends List<string>, I extends Iteration = IterationOf<'0'>> = Select<{
    [K in keyof O]: K extends Path[Pos<I>] ? Pos<Next<I>> extends Length<Path> ? never : Compute<_Omit<O[K] & {}, Path, Next<I>>> : O[K];
}, any>;
export declare type Omit<O extends object, Path extends PPath> = _Omit<O, Path>;
export {};
