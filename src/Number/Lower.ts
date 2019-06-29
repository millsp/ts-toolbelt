import {_Greater} from './Greater'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Nbr} from './_Internal'
import {Cast} from '../Any/Cast'

export type _Lower<N1 extends Iteration, N2 extends Iteration> =
    _Greater<N2, N1>

/** Check if a **number** is lower than another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Lower<'7', '5'> // false
 * type test1 = N.Lower<'5', '5'> // false
 * type test2 = N.Lower<'5', '7'> // true
 * ```
 */
export type Lower<N1 extends Nbr, N2 extends Nbr> =
    _Lower<IterationOf<N1>, IterationOf<N2>> extends infer X
    ? Cast<X, boolean>
    : never
