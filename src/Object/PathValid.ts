import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../Tuple/Update'
import {KeySet} from '../Tuple/KeySet'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Index} from '../Any/Index'
import {Tuple} from '../Tuple/Tuple'

/**
 * @hidden
 */
type _PathValid<O, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> = {
    0: _PathValid<UNonNullable<At<O & {}, Path[Pos<I>]>>, Path, Next<I>>
    1: Update<Path, KeySet<Key<Prev<I>>, Length<Path, 's'>>, never>
}[
    [O] extends [never]
    ? 1
    : 0
]

/** Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`Index[]`**
 * @example
 * ```ts
 * import {A, T, O} from 'ts-toolbelt'
 *
 * // Get a property in an object `o` at any depth with `path`
 * // `A.Cast<P, O.PathValid<O, P>>` makes sure `path` is valid
 * const getAt = <
 * O extends object,
 * P extends T.Tuple<A.Index>
 * >(o: O, path: A.Cast<P, O.PathValid<O, P>>): O.Path<O, P> => {
 *     let valueAt = o
 *
 *     for (const p of path)
 *         valueAt = valueAt[p]
 *
 *     return valueAt as any
 * }
 *
 * const test0 = getAt({a: {b: {c: 1}}},          ['a', 'b'] as const) // {c: number}
 * const test1 = getAt({a: {b: {c: 1}}} as const, ['a', 'b'] as const) // {c: 1}
 * const test2 = getAt({a: {b: {c: 1}}},          ['x'] as const)      // error
 * ```
 */
export type PathValid<O extends object, Path extends Tuple<Index>> =
    _PathValid<O, Path> extends infer X
    ? Cast<X, Tuple<Index>>
    : never
