import {_Minus} from './Minus'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {Formats} from '../Iteration/_Internal'
import {Format} from '../Iteration/Format'

export type _Negate<N extends Iteration> =
    _Minus<IterationOf<'0'>, N>

/** Negate a **`Number`**
 * @param N to negate
 * @param fmt output (?=`'s'`)
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Negate<'-10'>     //  '10'
 * type test1 = N.Negate<'10'>      // '-10'
 * type test2 = N.Negate<'10', 's'> // '-10'
 * type test3 = N.Negate<'10', 'n'> //  -10
 * type test4 = N.Negate<'-100'>    // string
 * ```
 */
export type Negate<N extends Number, fmt extends Formats = 's'> =
    Format<_Negate<IterationOf<N>>, fmt>
