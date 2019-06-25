import {Equals} from '../Any/Equals'

/** Logical **`^`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * type test0 = Xor<true, true>    // false
 * type test1 = Xor<false, true>   // true
 * type test2 = Xor<boolean, true> // boolean
 * ```
 */
export type Xor<B1 extends boolean, B2 extends boolean> =
    (Equals<B1, boolean> & Equals<B2, boolean>) extends true // If one of them is boolean
    ? boolean
    : Equals<B1, B2> extends true                            // If both of them are equal
      ? false
      : true
