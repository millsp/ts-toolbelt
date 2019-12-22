import {Number} from '../Number/Number'
import {__Drop} from './Drop'
import {__Take} from './Take'
import {Cast} from '../Any/Cast'
import {Prepend} from './Prepend'
import {__Reverse} from './Reverse'
import {List} from './List'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type _Group<L extends List, N extends Number, LN extends List = []> = {
    0: _Group<__Drop<L, N>, N, Prepend<LN, __Take<L, N>>>
    1: __Reverse<LN>
}[
    L extends List<never>
    ? 1
    : 0
]

/**
 * @hidden
 */
export type __Group<L extends List, N extends Number> =
    _Group<Naked<L>, N> extends infer X
    ? Cast<X, List>
    : never

/** Split **`L`** into sub-[[List]]s every **`N`**
 * @param L to group
 * @param N to split at
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Group<L extends List, N extends Number> =
    L extends unknown
    ? N extends unknown
      ? __Group<L, N>
      : never
    : never
