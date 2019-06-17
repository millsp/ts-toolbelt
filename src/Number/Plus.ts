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

type PlusPositive<N1 extends Iteration, N2 extends Iteration> = {
    0: PlusPositive<Next<N1>, Prev<N2>> // N1 = -/+, N2 = +
    1: N1
    2: number
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

type PlusNegative<N1 extends Iteration, N2 extends Iteration> = {
    0: PlusNegative<Prev<N1>, Next<N2>> // N1 = -/+, N2 = -
    1: N1
    2: number
}[
    Pos<N2> extends 0           // If successful
    ? 1
    : number extends Pos<N2>    // If un-success
      ? 2
      : 0                       // Or continue
]

export type _Plus<N1 extends Iteration, N2 extends Iteration> =
    _IsNegative<N2> extends true
    ? PlusNegative<N1, N2>
    : PlusPositive<N1, N2>

/** Add a **number** to another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Plus<N1 extends Nbr, N2 extends Nbr, fmt extends Format = 's'> =
    _Plus<IterationOf<N1>, IterationOf<N2>> extends infer I
    ? Fmt<Cast<I, Iteration>, fmt>
    : never
