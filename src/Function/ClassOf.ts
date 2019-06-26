import {Arrow} from './Arrow'

/** Create a class from a **`Function`**
 * @param F
 * @returns **`class`**
 * @example
 * ```ts
 * ```
 */
export type ClassOf<F extends Arrow> =
    new (...args: Parameters<F>) => ReturnType<F>
