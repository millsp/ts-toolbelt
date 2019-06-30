import {Boolean} from './Boolean'

/** Transform a **`boolean`** to **`true`** or **`false`**
 * @param B to transform
 * @returns **`'true'`** or **`'false'`**
 * @example
 * ```ts
 * import {B} from 'ts-toolbelt'
 *
 * type test0 = B.StringOf<true>    // 'true'
 * type test1 = B.StringOf<false>   // 'false'
 * type test2 = B.StringOf<boolean> // 'false' | 'true'
 * ```
 */
export type StringOf<B extends Boolean> = {
    0: 'false'
    1: 'true'
}[B]

