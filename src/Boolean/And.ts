/** Logical **`&&`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 */
export type And<B1 extends boolean, B2 extends boolean> =
    (B1 & B2) extends false  // If one of them is false
    ? false
    : (B1 | B2) extends true // If both of them are true
      ? true
      : boolean
