import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Next} from '../Iteration/Next'
import {_Append} from '../List/Append'
import {Exclude} from '../Union/Exclude'
import {List} from '../List/List'

/**
 * @hidden
 */
type PickIfEntry<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O
    ? _Append<LN, O[Cast<Key<I>, keyof O>]>
    : LN

/**
 * @hidden
 */
type __ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __ListOf<O, Exclude<K, Key<I>>, PickIfEntry<O, LN, I>, Next<I>>
    1: LN
}[
    [K] extends [never]
    ? 1
    : 0
]

/**
 * @hidden
 */
export type _ListOf<O extends object> =
    __ListOf<O, keyof O> extends infer X
    ? Cast<X, List>
    : never

/** Transform an **`object`** into a [[List]]
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type ListOf<O extends object> =
    O extends unknown
    ? _ListOf<O>
    : never
