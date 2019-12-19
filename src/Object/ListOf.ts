import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Next} from '../Iteration/Next'
import {Append} from '../List/Append'
import {Exclude} from '../Union/Exclude'
import {List} from '../List/List'

/**
 * @hidden
 */
type PickIfEntry<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O
    ? Append<LN, O[Cast<Key<I>, keyof O>]>
    : LN

/**
 * @hidden
 */
type _ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _ListOf<O, Exclude<K, Key<I>>, PickIfEntry<O, LN, I>, Next<I>>
    1: LN
}[
    [K] extends [never]
    ? 1
    : 0
]

/** Transform an **`object`** into a [[List]]
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @param LastK last index to pick
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type ListOf<O extends object> =
    _ListOf<O, keyof O> extends infer X
    ? Cast<X, List>
    : never
