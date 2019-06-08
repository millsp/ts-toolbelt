/** Logical **`&&`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type And<B1 extends boolean, B2 extends boolean> = (B1 & B2) extends false ? false : (B1 | B2) extends true ? true : boolean;
