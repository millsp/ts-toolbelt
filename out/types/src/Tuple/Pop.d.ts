import { Omit } from './Omit';
import { Key } from '../Iteration/Key';
import { Length } from './Length';
import { IterationOf } from '../Iteration/IterationOf';
import { Cast } from '../Any/Cast';
import { Prev } from '../Iteration/Prev';
import { List } from '../_Internal';
export declare type Pop<T extends List> = Omit<T, Key<Prev<IterationOf<Length<T, 's', 'max'>>>>> extends infer X ? Cast<X, List> : never;
