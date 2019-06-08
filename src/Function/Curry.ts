import {Pos} from '../Iteration/Pos'
import {Append} from '../Tuple/Append'
import {Concat} from '../Tuple/Concat'
import {Drop} from '../Tuple/Drop'
import {Length} from '../Tuple/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Type} from '../Any/Type'
import {Arrow} from './Arrow'
import {Equals} from '../Any/Equals'
import {ParamsOf} from './ParamsOf'
import {ReturnOf} from './ReturnOf'
import {IterationOf, Iteration} from '../Iteration/IterationOf'
import {Key} from '../Iteration/Key'
import {NonNullable} from '../Tuple/NonNullable'
import {List} from '../_Internal'

export type Gap = Type<never, 'gap'>

type GapOf<T1 extends List, T2 extends List, TN extends List, I extends Iteration = IterationOf<'0'>> =
    Equals<T1[Pos<I>], Gap> extends true
    ? Append<TN, T2[Pos<I>]>
    : TN

type _GapsOf<T1 extends List, T2 extends List, TN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _GapsOf<T1, T2, GapOf<T1, T2, TN, I>, Next<I>>
    1: Concat<TN, Drop<T2, Key<I>>>
}[
    Pos<I> extends Length<T1>
    ? 1
    : 0
]

type GapsOf<T1 extends List, T2 extends List> =
    _GapsOf<T1, T2> extends infer X
    ? Cast<X, List>
    : never


type Gaps<T extends List> = NonNullable<{
    [K in keyof T]?: T[K] | Gap
}>

/** Curry a **`Function`** like **`curry()`**
 * @param F to curry
 * @returns **`Function`**
 * @example
 */
export type Curry<F extends Arrow> =
    <T extends List>(...args: Cast<T, Gaps<ParamsOf<F>>>) =>
        GapsOf<T, ParamsOf<F>> extends [any, ...List]
        ? Curry<(...args: GapsOf<T, ParamsOf<F>>) => ReturnOf<F>>
        : ReturnOf<F>
