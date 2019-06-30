import {Fmt} from './Fmt'
import {Boolean} from './Boolean'
import {Format} from './_Internal'

/** Logical **`^`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Xor<true, true>    // false
 * type test1 = B.Xor<false, true>   // true
 * type test2 = B.Xor<boolean, true> // boolean
 * ```
 */
export type Xor<B1 extends Boolean, B2 extends Boolean, fmt extends Format = 'b'> = {
    0: {
        0: Fmt<0, fmt>
        1: Fmt<1, fmt>
    }
    1: {
        0: Fmt<1, fmt>
        1: Fmt<0, fmt>
    }
}[B1][B2]
