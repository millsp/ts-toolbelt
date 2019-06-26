import {Pos} from '../Iteration/Pos'
import {Append} from '../Tuple/Append'
import {Concat} from '../Tuple/Concat'
import {Drop} from '../Tuple/Drop'
import {Length} from '../Tuple/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Arrow} from './Arrow'
import {ParamsOf} from './ParamsOf'
import {ReturnOf} from './ReturnOf'
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

/** Curry a **`Function`** like **`curry()`**
 * @param F to curry
 * @returns **`Function`**
 * @example
 * ```ts
 * ```
 */
export type Curry<F extends Arrow> =
    <T extends any[]>(...args: Cast<T, Gaps<ParamsOf<F>>>) =>
        GapsOf<T, ParamsOf<F>> extends [any, ...any[]]
        ? Curry<(...args: GapsOf<T, ParamsOf<F>>) => ReturnOf<F>>
        : ReturnOf<F>
