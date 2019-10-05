import {Pos} from '../Iteration/Pos'
import {Append} from '../Tuple/Append'
import {Concat} from '../Tuple/Concat'
import {Drop} from '../Tuple/Drop'
import {Length} from '../Tuple/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Parameters} from './Parameters'
import {Return} from './Return'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Key} from '../Iteration/Key'
import {NonNullable} from '../Tuple/NonNullable'
import {x} from '../Any/x'
import {Tuple} from '../Tuple/Tuple'

type GapOf<T1 extends Tuple, T2 extends Tuple, TN extends Tuple, I extends Iteration = IterationOf<'0'>> =
    T1[Pos<I>] extends x
    ? Append<TN, T2[Pos<I>]>
    : TN

type _GapsOf<T1 extends Tuple, T2 extends Tuple, TN extends Tuple = [], I extends Iteration = IterationOf<'0'>> = {
    0: _GapsOf<T1, T2, GapOf<T1, T2, TN, I>, Next<I>>
    1: Concat<TN, Drop<T2, Key<I>>>
}[
    Key<I> extends Length<T1, 's'>
    ? 1
    : 0
]

type GapsOf<T1 extends Tuple, T2 extends Tuple> =
    _GapsOf<T1, T2> extends infer X
    ? Cast<X, Tuple>
    : never

type Gaps<T extends Tuple> = NonNullable<{
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
 * declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
 * ```
 */
export type Curry<F extends (...args: any[]) => any> =
    <T extends Tuple>(...args: Cast<T, Gaps<Parameters<F>>>) =>
        GapsOf<T, Parameters<F>> extends infer G
        ? Length<Cast<G, Tuple>> extends infer L
          ? L extends 0 ? Return<F> : L extends 1
            ? (...args: Cast<G, Tuple>)       => Return<F>
            : Curry<(...args: Cast<G, Tuple>) => Return<F>>
        : never
    : never
