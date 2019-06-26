import {_Negate} from './Negate'
import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Fmt} from '../Iteration/Fmt'

export type _Absolute<N extends Iteration> =
    _IsNegative<N> extends true
    ? _Negate<N>
    : N

/** Get the absolute value of a **number**
 * @param N to absolute
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * ```
 */
export type Absolute<N extends Nbr, fmt extends Format = 's'> =
    _Absolute<IterationOf<N>> extends infer I
    ? Fmt<Cast<I, Iteration>, fmt>
    : never
