import { Not } from './Not';
/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 */
export declare type Negate<B extends boolean> = Not<B>;
