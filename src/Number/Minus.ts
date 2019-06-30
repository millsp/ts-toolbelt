import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {Next} from '../Iteration/Next'
import {_IsNegative} from './IsNegative'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Fmt} from '../Iteration/Fmt'

type _MinusPositive<N1 extends Iteration, N2 extends Iteration> = {
    0: _MinusPositive<Prev<N1>, Prev<N2>> // N1 = -/+, N2 = +
    1: N1
    2: N2
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

type _MinusNegative<N1 extends Iteration, N2 extends Iteration> = {
    0: _MinusNegative<Next<N1>, Next<N2>> // N1 = -/+, N2 = -
    1: N1
    2: N2
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

export type _Minus<N1 extends Iteration, N2 extends Iteration> = {
    0: _MinusPositive<N1, N2>
    1: _MinusNegative<N1, N2>
}[_IsNegative<N2>] extends infer X
? Cast<X, Iteration>
: never

/** Subtract a **number** from another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Minus<'2', '10'>        // '-8'
 * type test1 = N.Minus<'0', '40'>        // '-40'
 * type test2 = N.Minus<'0', '40', 's'>   // '-40'
 * type test3 = N.Minus<'0', '40', 'n'>   //  -40
 * type test4 = N.Minus<'-20', '40', 's'> // string
 * type test5 = N.Minus<'-20', '40', 'n'> // number
 * ```
 */
export type Minus<N1 extends Nbr, N2 extends Nbr, fmt extends Format = 's'> =
    Fmt<_Minus<IterationOf<N1>, IterationOf<N2>>, fmt>
