import { Length } from './Length';
import { Pos } from '../Iteration/Pos';
import { Next } from '../Iteration/Next';
import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
import { Merge } from '../Object/Merge';
import { Record } from '../Object/Record';
declare type _ZipObj<TProp extends string[], TField extends List, O extends object = {}, I extends Iteration = IterationOf<'0'>> = {
    0: _ZipObj<TProp, TField, Merge<O, Record<TProp[Pos<I>], TField[Pos<I>]>>, Next<I>>;
    1: O;
}[Pos<I> extends Length<TProp> ? 1 : 0];
/** Create an **`object`** from **tuple**s of keys & fields
 * @param TProps its keys
 * @param TFields its fields
 * @returns **`object`**
 * @example
 */
export declare type ZipObj<TKeys extends string[], TFields extends List> = _ZipObj<TKeys, TFields> extends infer X ? Cast<X, object> : never;
export {};
