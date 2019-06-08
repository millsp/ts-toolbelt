import { Length } from '../../Tuple/Length';
import { Compute } from '../../Extras/Compute';
import { Iteration, IterationOf } from '../../Iteration/IterationOf';
import { Pos } from '../../Iteration/Pos';
import { Next } from '../../Iteration/Next';
import { Select } from '../Select';
import { List } from '../../_Internal';
import { Path as PPath } from './_Internal';
declare type _Pick<O extends object, Path extends List<string>, I extends Iteration = IterationOf<'0'>> = Select<{
    [K in keyof O]: K extends Path[Pos<I>] ? Pos<Next<I>> extends Length<Path> ? O[K] : Compute<_Pick<O[K] & {}, Path, Next<I>>> : never;
}, any>;
export declare type Pick<O extends object, Path extends PPath> = _Pick<O, Path>;
export {};
