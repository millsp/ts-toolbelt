import {Not} from './Not'

/** Logical **`!`** operator (behaves like the JS one)
 * @param B to negate
 * @returns **`boolean`**
 * @example
 */
export type Negate<B extends boolean> =
    Not<B>
