import {_Minus} from './Minus'
import {_IsPositive} from './IsPositive'
import {Cast} from '../Any/Cast'
import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Nbr} from './_Internal'

export type _Greater<N1 extends Iteration, N2 extends Iteration> =
    _Minus<N1, N2> extends infer M
    ? _IsPositive<Cast<M, Iteration>>
    : never

/** Check if a **number** is bigger than another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Greater<'7', '5'> // true
 * type test1 = N.Greater<'5', '5'> // false
 * type test2 = N.Greater<'5', '7'> // false
 * ```
 */
export type Greater<N1 extends Nbr, N2 extends Nbr> =
    _Greater<IterationOf<N1>, IterationOf<N2>>  extends infer X
    ? Cast<X, boolean>
    : never
