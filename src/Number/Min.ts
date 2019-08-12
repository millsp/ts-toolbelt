import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Numbers} from './_Internal'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {_IsPositive} from './IsPositive'
import {Exclude} from '../Union/Exclude'
import {Format} from '../Iteration/Format'
import {True} from '../Boolean/Boolean'
import {Or} from '../Boolean/Or'
import {Extends} from '../Any/Extends'

type _MinPositive<N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _MinPositive<N, Next<I>> // Find smallest +
    1: I
}[
    Or<Extends<Key<I>, N>, Extends<string, Key<I>>> // stops as soon as it finds
]

type MinPositive<N extends Number> =
    _MinPositive<N> extends infer X
    ? Cast<X, Iteration>
    : never

type _MinNegative<N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _MinNegative<Exclude<N, Key<I>>, Prev<I>> // Find smallest -
    1: Next<I>
    2: string
}[
    [N] extends [never]
    ? 1
    : string extends N
      ? 2
      : 0
]

type MinNegative<N extends Number> =
    _MinNegative<N> extends infer X
    ? Cast<X, Iteration>
    : never

export type _Min<N extends Iteration> =
    _IsPositive<N> extends True // breaks distribution
    ? MinPositive<Key<N>>
    : MinNegative<Exclude<Key<N>, Numbers['string']['+']>>
    // Exclude (+) numbers, MinNegative only works with (-)

/** Get the smallest **`Number`** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Min<'-2' | '10' | '3'>      // '-2'
 * type test1 = N.Min<'-2' | '10' | '3', 's'> // '-2'
 * type test2 = N.Min<'-2' | '10' | '3', 'n'> //  -2
 * type test3 = N.Min<'-2' | '10' | 'oops'>   // string
 * ```
 */
export type Min<N extends Number, fmt extends Formats = 's'> =
    Format<_Min<IterationOf<N>>, fmt>
