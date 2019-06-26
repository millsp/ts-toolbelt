import {Nbr} from '../Number/_Internal'
import {Drop} from './Drop'
import {Take} from './Take'
import {Cast} from '../Any/Cast'
import {Prepend} from './Prepend'
import {Reverse} from './Reverse'

type _Group<T extends any[], N extends Nbr, TN extends any[] = []> = {
    0: _Group<Drop<T, N>, N, Prepend<TN, Take<T, N>>>
    1: Reverse<TN>
}[
    T extends []
    ? 1
    : 0
]

/** Split **`T`** into sub-**tuple**s every **`N`**
 * @param T to group
 * @param N to split at
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Group<T extends any[], N extends Nbr> =
    _Group<T, N> extends infer X
    ? Cast<X, any[]>
    : never
