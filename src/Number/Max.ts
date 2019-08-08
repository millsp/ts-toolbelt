import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Numbers} from './_Internal'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Key} from '../Iteration/Key'
import {_IsNegative} from './IsNegative'
import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'
import {Format} from '../Iteration/Format'
import {Extends} from '../Any/Extends'
import {Or} from '../Boolean/Or'
import {True} from '../Boolean/Boolean'

type _MaxPositive<N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _MaxPositive<Exclude<N, Key<I>>, Next<I>> // Find biggest +
    1: Prev<I>
    2: string
}[
    [N] extends [never] // stops when nothing's left
    ? 1
    : string extends N
      ? 2
      : 0
]

type MaxPositive<N extends Number> =
    _MaxPositive<N> extends infer X
    ? Cast<X, Iteration>
    : never

type _MaxNegative<N extends Number, I extends Iteration = IterationOf<'0'>> = {
    0: _MaxNegative<Exclude<N, Key<I>>, Prev<I>> // Find biggest -
    1: I
}[
    Or<Extends<Key<I>, N>, Extends<string, Key<I>>> // stops as soon as it finds
]

type MaxNegative<N extends Number> =
    _MaxNegative<N> extends infer X
    ? Cast<X, Iteration>
    : never

export type _Max<N extends Iteration> =
    _IsNegative<N> extends True // breaks distribution
    ? MaxNegative<Key<N>>
    : MaxPositive<Exclude<Key<N>, Numbers['string']['-']>>
    // Exclude (-) numbers, MinPositive only works with (+)

/** Get the biggest **`Number`** within an **union**
 * @param N **union**
 * @param fmt output (?=`'s'`)
 * @returns **`string | number | boolean`**
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
export type Max<N extends Number, fmt extends Formats = 's'> =
    Format<_Max<IterationOf<N>>, fmt>
