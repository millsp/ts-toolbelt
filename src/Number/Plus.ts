import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {_IsNegative} from './IsNegative'
import {Cast} from '../Any/Cast'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'

type _PlusPositive<N1 extends Iteration, N2 extends Iteration> = {
    0: _PlusPositive<Next<N1>, Prev<N2>> // N1 = -/+, N2 = +
    1: N1
    2: number
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

type PlusPositive<N1 extends Iteration, N2 extends Iteration> =
    _PlusPositive<N1, N2> extends infer X
    ? Cast<X, Iteration>
    : never

type _PlusNegative<N1 extends Iteration, N2 extends Iteration> = {
    0: _PlusNegative<Prev<N1>, Next<N2>> // N1 = -/+, N2 = -
    1: N1
    2: number
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

type PlusNegative<N1 extends Iteration, N2 extends Iteration> =
    _PlusNegative<N1, N2> extends infer X
    ? Cast<X, Iteration>
    : never

export type _Plus<N1 extends Iteration, N2 extends Iteration> = {
    0: PlusPositive<N1, N2>
    1: PlusNegative<N1, N2>
}[_IsNegative<N2>]

/** Add a **`Number`** to another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @param fmt output (?=`'s'`)
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Plus<'2', '10'>        // '12'
 * type test1 = N.Plus<'0', '40'>        // '40'
 * type test2 = N.Plus<'0', '40', 's'>   // '40'
 * type test3 = N.Plus<'0', '40', 'n'>   //  40
 * type test4 = N.Plus<'-20', '40', 's'> // '20'
 * type test5 = N.Plus<'-20', '40', 'n'> //  20
 * ```
 */
export type Plus<N1 extends Number, N2 extends Number, fmt extends Formats = 's'> =
    Format<_Plus<IterationOf<N1>, IterationOf<N2>>, fmt>
