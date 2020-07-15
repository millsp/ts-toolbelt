import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable} from '../Union/NonNullable'
import {Update} from '../List/Update'
import {Key} from '../Iteration/Key'
import {Key as AKey} from '../Any/Key'
import {List} from '../List/List'
import {Length} from '../List/Length'
import {Extends} from '../Any/_api'

/**
@hidden
*/
type ValidatePath<O, Path extends List<AKey>, I extends Iteration> =
    Update<
        Path,
        Key<I>,
        [At<O & {}, Path[Pos<I>]>] extends [never]
        ? never
        : Path[Pos<I>]
    >

/**
@hidden
*/
type __PathValid<O, Path extends List<AKey>, I extends Iteration = IterationOf<'0'>> = {
    0: __PathValid<NonNullable<At<O & {}, Path[Pos<I>]>>, ValidatePath<O, Path, I>, Next<I>>
    1: Path
}[Extends<Pos<I>, Length<Path>>]

/**
@hidden
*/
export type _PathValid<O extends object, Path extends List<AKey>> =
    __PathValid<O, Path> extends infer X
    ? Cast<X, List<AKey>>
    : never

/**
 * Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`Index[]`**
 * @example
 * ```ts
 * import {A, L, O} from 'ts-toolbelt'
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
export type PathValid<O extends object, Path extends List<AKey>> =
    O extends unknown
    ? Path extends unknown
      ? _PathValid<O, Path>
      : never
    : never
