/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 */
export declare type Not<B extends boolean> = B extends false ? true : false;
