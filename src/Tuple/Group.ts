import {Nbr} from '../Number/_Internal'
import {Drop} from './Drop'
import {Take} from './Take'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Prepend} from './Prepend'
import {Reverse} from './Reverse'
import {List} from '../_Internal'

type _Group<T extends List, N extends Nbr, TN extends List = []> = {
    0: _Group<Drop<T, N>, N, Prepend<TN, Take<T, N>>>
    1: Reverse<TN>
}[
    Length<T> extends 0
    ? 1
    : 0
]

/** Split **`T`** into sub-**tuple**s every **`N`**
 * @param T to group
 * @param N to split at
 * @returns **`List`**
 * @example
 */
export type Group<T extends List, N extends Nbr> =
    _Group<T, N> extends infer X
    ? Cast<X, List>
    : never
