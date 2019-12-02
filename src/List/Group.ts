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
type _Group<T extends List, N extends Number, TN extends List = []> = {
    0: _Group<Drop<T, N>, N, Prepend<TN, Take<T, N>>>
    1: Reverse<TN>
}[
    T extends List<never>
    ? 1
    : 0
]

/** Split **`T`** into sub-[[List]]s every **`N`**
 * @param T to group
 * @param N to split at
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Group<T extends List, N extends Number> =
    _Group<T, N> extends infer X
    ? Cast<X, List>
    : never
