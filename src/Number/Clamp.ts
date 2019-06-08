import {_Greater} from './Greater'
import {_Lower} from './Lower'
import {Iteration, IterationOf} from '../Iteration/IterationOf'
import {Pos} from '../Iteration/Pos'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'

type _Clamp<N extends Iteration, Min extends Iteration, Max extends Iteration> =
    _Greater<N, Max> extends true
    ? Max
    : _Lower<N, Min> extends true
      ? Min
      : N

/** Keep a **number** within a range of **number**s
 * @param N to clamp
 * @param Min min output
 * @param Max max output
 * @param fmt output (?=`'s'`)
 *
 * @returns **`string`** or **`number`**
 * @example
 */
export type Clamp<N extends Nbr, Min extends Nbr, Max extends Nbr, fmt extends Format = 's'> =
    _Clamp<IterationOf<N>, IterationOf<Min>, IterationOf<Max>> extends infer I
    ? Pos<Cast<I, Iteration>, fmt>
    : never
