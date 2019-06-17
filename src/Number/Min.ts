import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Nbr, Numbers} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {_IsPositive} from './IsPositive'
import {Exclude} from '../Union/Exclude'
import {Fmt} from '../Iteration/Fmt'

type MinPositive<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MinPositive<N, Next<I>> // Find smallest +
    1: I
}[
    Key<I> extends N
    ? 1
    : 0
]

type MinNegative<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MinNegative<Exclude<N, Key<I>>, Prev<I>> // Find smallest -
    1: Next<I>
    2: string
}[
    [N] extends [never]
    ? 1
    : string extends N
      ? 2
      : 0
]

export type _Min<N extends Iteration> =
    _IsPositive<N> extends true
    ? MinPositive<Key<N>>
    : MinNegative<Exclude<Key<N>, Numbers['string']['+']>>
    // Exclude (+) numbers, MinNegative only works with (-)

/** Get the smallest **number** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Min<N extends Nbr, fmt extends Format = 's'> =
    _Min<IterationOf<N>> extends infer I
    ? Fmt<Cast<I, Iteration>, fmt>
    : never
