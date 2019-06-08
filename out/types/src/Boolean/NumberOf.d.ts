/** Transform a **`boolean`** to **`0`** or **`1`**
 * @param B to transform
 * @returns **`0`** or **`1`**
 * @example
 */
export declare type NumberOf<B extends boolean> = B extends false ? 0 : 1;
