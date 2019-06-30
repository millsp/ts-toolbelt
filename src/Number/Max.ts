import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Nbr, Numbers} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Key} from '../Iteration/Key'
import {_IsNegative} from './IsNegative'
import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'
import {Fmt} from '../Iteration/Fmt'
import {True} from '../Boolean/_api'

type MaxPositive<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MaxPositive<Exclude<N, Key<I>>, Next<I>> // Find biggest +
    1: Prev<I>
    2: string
}[
    [N] extends [never] // stops when nothing's left
    ? 1
    : string extends N
      ? 2
      : 0
]

type MaxNegative<N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: MaxNegative<Exclude<N, Key<I>>, Prev<I>> // Find biggest -
    1: I
}[
    Key<I> extends N // stops as soon as it finds
    ? 1
    : 0
]

export type _Max<N extends Iteration> =
    _IsNegative<N> extends True
    ? MaxNegative<Key<N>>
    : MaxPositive<Exclude<Key<N>, Numbers['string']['-']>>
    // Exclude (-) numbers, MinPositive only works with (+)

/** Get the biggest **number** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Max<'-2' | '10' | '3'>      // '10'
 * type test1 = N.Max<'-2' | '10' | '3', 's'> // '10'
 * type test2 = N.Max<'-2' | '10' | '3', 'n'> //  10
 * type test3 = N.Min<'-2' | '10' | 'oops'>   // string
 * ```
 */
export type Max<N extends Nbr, fmt extends Format = 's'> =
    _Max<IterationOf<N>> extends infer I
    ? Fmt<Cast<I, Iteration>, fmt>
    : never
