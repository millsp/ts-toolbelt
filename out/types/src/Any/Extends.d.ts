/** Check whether **`A1`** is part of **`A2`** or not
 * (diff. w/ `extends`: forces a **`boolean`** return)
 * @param A1
 * @param A2
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Extends<A1 extends any, A2 extends any> = (A1 extends infer A ? A : never) extends never ? false : (A1 extends A2 ? true : false);
