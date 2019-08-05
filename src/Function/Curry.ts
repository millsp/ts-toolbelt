import {Pos} from '../Iteration/Pos'
import {Append} from '../Tuple/Append'
import {Concat} from '../Tuple/Concat'
import {Drop} from '../Tuple/Drop'
import {Length} from '../Tuple/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Function} from './Function'
import {Parameters} from './Parameters'
import {Return} from './Return'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Key} from '../Iteration/Key'
import {NonNullable} from '../Tuple/NonNullable'
import {x} from '../Any/x'

type GapOf<T1 extends any[], T2 extends any[], TN extends any[], I extends Iteration = IterationOf<'0'>> =
    T1[Pos<I>] extends x
    ? Append<TN, T2[Pos<I>]>
    : TN

type _GapsOf<T1 extends any[], T2 extends any[], TN extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _GapsOf<T1, T2, GapOf<T1, T2, TN, I>, Next<I>>
    1: Concat<TN, Drop<T2, Key<I>>>
}[
    Pos<I> extends Length<T1>
    ? 1
    : 0
]

type GapsOf<T1 extends any[], T2 extends any[]> =
    _GapsOf<T1, T2> extends infer X
    ? Cast<X, any[]>
    : never


type Gaps<T extends any[]> = NonNullable<{
    [K in keyof T]?: T[K] | x
}>

/** Curry a **`Function`**
 * @param F to curry
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `curry`
 * /// It handles placeholders and variable arguments
 * declare function curry<Fns extends F.Function>(fns: Fns): F.Curry<Fns>
 * ```
 */
export type Curry<F extends Function> =
    <T extends any[]>(...args: Cast<T, Gaps<Parameters<F>>>) =>
        GapsOf<T, Parameters<F>> extends [any, ...any[]]
        ? Curry<(...args: GapsOf<T, Parameters<F>>) => Return<F>>
        : Return<F>
