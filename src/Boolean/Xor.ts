import {Boolean} from './Boolean'

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
export type Xor<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0
        1: 1
    }
    1: {
        0: 1
        1: 0
    }
}[B1][B2]
