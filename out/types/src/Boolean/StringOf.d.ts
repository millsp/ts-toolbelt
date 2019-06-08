/** Transform a **`boolean`** to **`true`** or **`false`**
 * @param B to transform
 * @returns **`'true'`** or **`'false'`**
 * @example
 */
export declare type StringOf<B extends boolean> = B extends false ? 'false' : 'true';
