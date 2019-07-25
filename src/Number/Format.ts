import {Formats} from './_Internal'
import {Number} from './Number'
import {IsZero} from './IsZero'
import {Not} from '../Boolean/Not'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'

/** Change the format of a **`Number`**
 * @param B to transform
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Format<'30', 'b'> // True
 * type test1 = N.Format<'30', 'n'> // 30
 * ```
 */
export type Format<N extends Number, fmt extends Formats> = {
    'b': Not<IsZero<N>>
    'n': Pos<IterationOf<N>>
    's': N
}[fmt]
