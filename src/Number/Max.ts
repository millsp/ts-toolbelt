import {Equals} from '../Any/Equals'
import {Prev} from '../Iteration/Prev'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Nbr, Numbers} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Key} from '../Iteration/Key'
import {_IsNegative} from './IsNegative'
import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'
import {Pos} from '../Iteration/Pos'

type MaxPositive<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MaxPositive<Exclude<N, Key<I>>, Next<I>> // Find biggest +
    1: Prev<I>
}[
    Equals<N, never> extends true
    ? 1
    : 0
]

type MaxNegative<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MaxNegative<Exclude<N, Key<I>>, Prev<I>> // Find biggest -
    1: I
}[
    Key<I> extends N
    ? 1
    : 0
]

export type _Max<N extends Iteration> =
    _IsNegative<N> extends true
    ? MaxNegative<Key<N>>
    : MaxPositive<Exclude<Key<N>, Numbers['string']['-']>>
    // Exclude (-) numbers, MinPositive only works with (+)

/** Get the biggest **number** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Max<N extends Nbr, fmt extends Format = 's'> =
    _Max<IterationOf<N>> extends infer I
    ? Pos<Cast<I, Iteration>, fmt>
    : never
