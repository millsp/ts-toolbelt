import {Pos} from '../Iteration/Pos'
import {Append} from '../List/Append'
import {Concat} from '../List/Concat'
import {Drop} from '../List/Drop'
import {Length} from '../List/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Parameters} from './Parameters'
import {Return} from './Return'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Key} from '../Iteration/Key'
import {NonNullable} from '../List/NonNullable'
import {x} from '../Any/x'
import {List} from '../List/List'
import {Function} from './Function'

/**
 * @hidden
 */
type GapOf<T1 extends List, T2 extends List, TN extends List, I extends Iteration = IterationOf<'0'>> =
    T1[Pos<I>] extends x
    ? Append<TN, T2[Pos<I>]>
    : TN

/**
 * @hidden
 */
type _GapsOf<T1 extends List, T2 extends List, TN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _GapsOf<T1, T2, GapOf<T1, T2, TN, I>, Next<I>>
    1: Concat<TN, Drop<T2, Key<I>>>
}[
    Pos<I> extends Length<T1>
    ? 1
    : 0
]

/**
 * @hidden
 */
type GapsOf<T1 extends List, T2 extends List> =
    _GapsOf<T1, T2> extends infer X
    ? Cast<X, List>
    : never

/**
 * @hidden
 */
type Gaps<T extends List> = NonNullable<{
    [K in keyof T]?: T[K] | x
}>

/** Curry a [[Function]]
 * @param F to curry
 * @returns [[Function]]
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `curry`
 * /// It handles placeholders and variable arguments
 * declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
 * ```
 */
export type Curry<F extends Function> =
    <T extends List>(...args: Cast<T, Gaps<Parameters<F>>>) =>
        GapsOf<T, Parameters<F>> extends infer G
        ? Length<Cast<G, List>> extends infer L
          ? L extends 0 ? Return<F> : L extends 1
            // it means that it can continue being curried & can be called as terminating function
            ? Curry<(...args: Cast<G, List>) => Return<F>> & ((...args: Cast<G, List>) => Return<F>)
            // so it allows to continue currying (useless) & call the function (the last parameter)
            : Curry<(...args: Cast<G, List>) => Return<F>>
        : never
    : never
