import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Prepend} from './Prepend'
import {Way} from '../Iteration/_Internal'
import {List} from './List'
import {Prev} from '../Iteration/Prev'
import {Cast} from '../Any/Cast'
import {Tail} from './Tail'
import {Extends} from '../Any/Extends'

/**
 * starts in reverse from `N` till `N` = 0
 * @hidden
 */
type TakeForth<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> =
    Extends<-1, Pos<I>> extends 0
        ? TakeForth<L, N, Prev<I>, Prepend<LN, L[Pos<I>]>>
        : LN

/**
 * starts in reverse from the end till `N` = 0
 * @hidden
 */
type TakeBack<L extends List, N extends Iteration> = Extends<0, Pos<N>> extends 0
    ? TakeBack<Tail<L>, Prev<N>>
    : L

/**
 * @hidden
 */
type __Take<L extends List, N extends Iteration, way extends Way> = {
    '->': TakeForth<L, N> // Reverse logic to work naturally #`Prepend`
    '<-': TakeBack<L, N>  // Reverse logic to work naturally #`Prepend`
}[way]

/**
 * @hidden
 */
export type _Take<L extends List, N extends number, way extends Way = '->'> =
    __Take<L, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never

/**
 * Extract `N` entries out of `L`
 * @param L to extract from
 * @param N to extract out
 * @param way (?=`'->'`) to extract from end
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Take<L extends List, N extends number, way extends Way = '->'> =
    L extends unknown
    ? N extends unknown
      ? _Take<L, N, way>
      : never
    : never
