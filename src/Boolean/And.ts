import {Format} from './_Internal'
import {Fmt} from './Fmt'
import {Boolean} from './_Boolean'

/** Logical **`&&`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.And<true, false>        // true
 * type test1 = B.And<true & false, true> // false
 * type test2 = B.And<true | false, true> // boolean
 * ```
 */
export type And<B1 extends Boolean, B2 extends Boolean, fmt extends Format = 'b'> = {
    0: {
      0: Fmt<0, fmt>
      1: Fmt<0, fmt>
    }
    1: {
      0: Fmt<0, fmt>
      1: Fmt<1, fmt>
    }
}[B1][B2]

