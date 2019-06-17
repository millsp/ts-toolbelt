import {_Minus} from './Minus'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Fmt} from '../Iteration/Fmt'

export type _Negate<N extends Iteration> =
    _Minus<IterationOf<'0'>, N>

/** Negate a **number**
 * @param N to negate
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Negate<N extends Nbr, fmt extends Format = 's'> =
    _Negate<IterationOf<N>> extends infer I
    ? Fmt<Cast<I, Iteration>, fmt>
    : never
