import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../List/Update'
import {KeySet} from '../List/KeySet'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Index} from '../Any/Index'
import {List} from '../List/List'

/**
 * @hidden
 */
type _PathValid<O, Path extends List<Index>, I extends Iteration = IterationOf<'0'>> = {
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
 * P extends L.List<A.Index>
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
export type PathValid<O extends object, Path extends List<Index>> =
    _PathValid<O, Path> extends infer X
    ? Cast<X, List<Index>>
    : never
