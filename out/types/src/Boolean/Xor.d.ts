import { Equals } from '../Any/Equals';
/** Logical **`^`** operator (behaves like the JS one)
 * @param B1 Left-hand side
 * @param B2 Right-hand side
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Xor<B1 extends boolean, B2 extends boolean> = (Equals<B1, boolean> & Equals<B2, boolean>) extends true ? boolean : Equals<B1, B2> extends true ? false : true;
