/* eslint-disable fp/no-this */
import {Arrow} from './Arrow'

/** Create a class from a **`Function`**
 * @param F
 * @returns **`class`**
 * @example
 * ```ts
 * type Clazz = ClassOf<(name: string) => {
 *     name: string
 * }>
 *
 * const test0: Clazz = class X {
 *     name: string
 *
 *     constructor(name: string) {
 *         this.name = name
 *     }
 * }
 * ```
 */
export type ClassOf<F extends Arrow> =
    new (...args: Parameters<F>) => ReturnType<F>
