import {Boolean} from './Boolean'
import {Formats} from './_Internal'

/** Change the format of a **Boolean**
 * @param B to transform
 * @returns **`string | number | boolean`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Format<B.True, 's'> // 'true'
 * type test1 = B.Format<B.True, 'b'> //  true
 * type test2 = B.Format<B.True, 'n'> //  1
 * ```
 */
export type Format<B extends Boolean, fmt extends Formats> = {
    's': ['false', 'true'][B] // 0: 'false', 1: 'true'
    'b': [ false,   true ][B] // 0:  false , 1:  true
    'n': B
}[fmt]
