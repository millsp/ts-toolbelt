import {Number} from '../Number/Number'
import {Drop} from './Drop'
import {Take} from './Take'
import {Cast} from '../Any/Cast'
import {Prepend} from './Prepend'
import {Reverse} from './Reverse'
import {List} from './List'

/**
 * @hidden
 */
type _Group<L extends List, N extends Number, LN extends List = []> = {
    0: _Group<Drop<L, N>, N, Prepend<LN, Take<L, N>>>
    1: Reverse<LN>
}[
    L extends List<never>
    ? 1
    : 0
]

/** Split **`L`** into sub-[[List]]s every **`N`**
 * @param L to group
 * @param N to split at
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Group<L extends List, N extends Number> =
    _Group<L, N> extends infer X
    ? Cast<X, List>
    : never
