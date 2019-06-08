/** Logical **`||`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 */
export type Or<B1 extends boolean, B2 extends boolean> =
    (B1 | B2) extends false  // If both of them are false
    ? false
    : (B1 & B2) extends true // If one of them is true
      ? true
      : boolean
