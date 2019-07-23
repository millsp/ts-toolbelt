import {Boolean, False, True} from './Boolean'

/** Logical **`||`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`Boolean`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.Or<B.True, B.False>    // True
 * type test1 = B.Or<B.True, B.True>     // True
 * type test2 = B.Or<B.Boolean, B.False> // Boolean
 * ```
 */
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: False
        1: True
    }
    1: {
        0: True
        1: True
    }
}[B1][B2]
