import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Next} from '../Iteration/Next'
import {Append} from '../Tuple/Append'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/Boolean'
import {Exclude} from '../Union/Exclude'
import {Tuple} from '../Tuple/Tuple'

type PickIfEntry<O extends object, TN extends Tuple, I extends Iteration> =
    Key<I> extends keyof O
    ? Append<TN, O[Cast<Key<I>, keyof O>]>
    : TN

type __TupleOf<O extends object, K, TN extends Tuple = [], I extends Iteration = IterationOf<'0'>> = {
    0: __TupleOf<O, Exclude<K, Key<I>>, PickIfEntry<O, TN, I>, Next<I>>
    1: TN
}[
    Equals<K, never> extends True
    ? 1
    : 0
]

type _TupleOf<O extends object> =
    __TupleOf<O, keyof O> extends infer X
    ? Cast<X, Tuple>
    : never

/** Transform an **`object`** into a **tuple**
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @param LastK last index to pick
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type TupleOf<O extends object> =
    O extends unknown // distribute
    ? _TupleOf<O>
    : never
