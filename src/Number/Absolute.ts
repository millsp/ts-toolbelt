import {_Negate} from './Negate'
import {_IsNegative} from './IsNegative'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'

export type _Absolute<N extends Iteration> = {
    0: N
    1: _Negate<N>
}[_IsNegative<N>]

/** Get the absolute value of a **`Number`**
 * @param N to absolute
 * @param fmt output (?=`'s'`)
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Absolute<'-20'>      // '20'
 *
 * type test1 = N.Absolute<'-20', 's'> // '20'
 * type test2 = N.Absolute<'-20', 'n'> //  20
 * ```
 */
export type Absolute<N extends Number, fmt extends Formats = 's'> =
    Format<_Absolute<IterationOf<N>>, fmt>
