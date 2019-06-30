import {Format} from './_Internal'
import {Fmt} from './Fmt'
import {Boolean} from './Boolean'

/** Logical **`||`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Or<true, false>    // true
 * type test1 = B.Or<true, true>     // true
 * type test2 = B.Or<boolean, false> // boolean
 * ```
 */
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0
        1: 1
    }
    1: {
        0: 1
        1: 1
    }
}[B1][B2]
