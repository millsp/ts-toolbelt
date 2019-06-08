import { Length } from '../../Tuple/Length';
import { Compute } from '../../Extras/Compute';
import { Iteration, IterationOf } from '../../Iteration/IterationOf';
import { Pos } from '../../Iteration/Pos';
import { Next } from '../../Iteration/Next';
import { Readonly as OReadonly } from '../Readonly';
import { Last } from '../../Tuple/Last';
import { Pop } from '../../Tuple/Pop';
import { Depth } from '../_Internal';
import { Path as PPath } from './_Internal';
import { List } from '../../_Internal';
import { Prepend } from '../../Tuple/_api';
declare type _Readonly<O extends object, Path extends List<string>, K extends string, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
    [P in keyof O]: P extends Path[Pos<I>] ? Pos<Next<I>> extends Length<Path> ? OReadonly<O[P] & {}, K, depth> : Compute<_Readonly<O[P] & {}, Path, K, depth, Next<I>>> : O[P];
};
export declare type Readonly<O extends object, Path extends PPath, depth extends Depth = 'flat'> = _Readonly<Record<'_', O>, Pop<Prepend<Path, '_'>>, Last<Path>, depth>['_'];
export {};
