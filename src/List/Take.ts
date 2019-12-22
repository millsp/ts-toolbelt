import {Number} from '../Number/Number'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Prepend} from './Prepend'
import {Way} from '../Iteration/_Internal'
import {List} from './List'
import {Prev} from '../Iteration/Prev'
import {Cast} from '../Any/Cast'
import {Naked} from './_Internal'
import {Tail} from './Tail'

/**
 * starts in reverse from `N` till `N` = 0
 * @hidden
 */
type TakeForth<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> = {
    0: TakeForth<L, N, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[
    -1 extends Pos<I>
    ? 1
    : 0
]

/**
 * starts in reverse from the end till `N` = 0
 * @hidden
 */
type TakeBack<L extends List, N extends Iteration> = {
    0: TakeBack<Tail<L>, Prev<N>>
    1: L
}[
    0 extends Pos<N>
    ? 1
    : 0
]

/**
 * @hidden
 */
type _Take<L extends List, N extends Iteration, way extends Way> = {
    '->': TakeForth<L, N> // Reverse logic to work naturally #`Prepend`
    '<-': TakeBack<L, N>  // Reverse logic to work naturally #`Prepend`
}[way]

/**
 * @hidden
 */
export type __Take<L extends List, N extends Number, way extends Way = '->'> =
    _Take<Naked<L>, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never

/** Extract **`N`** entries out of **`L`**
 * @param L to extract from
 * @param N to extract out
 * @param way (?=`'->'`) to extract from end
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Take<L extends List, N extends Number, way extends Way = '->'> =
    L extends unknown
    ? N extends unknown
      ? __Take<L, N, way>
      : never
    : never
