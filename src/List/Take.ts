import {Number} from '../Number/Number'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Prepend} from './Prepend'
import {Way} from '../Iteration/_Internal'
import {List} from './List'
import {Prev} from '../Iteration/Prev'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Required} from './Required'
import {Reverse} from './Reverse'
import {Naked} from './_Internal'

/**
 * starts in reverse from `N` till `N` = 0
 * @hidden
 */
type TakeForth<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> = {
    0: TakeForth<L, Prev<N>, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[
    Pos<N> extends 0
    ? 1
    : 0
]

/**
 * starts in reverse from the end till `N` = 0
 * @hidden
 */
type TakeBack<L extends List, N extends Iteration, I extends Iteration = Prev<IterationOf<Length<L, 's'>>>, LN extends List = []> = {
    0: TakeBack<L, Prev<N>, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[
    Pos<N> extends 0
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
    _Take<Naked<L>, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never
