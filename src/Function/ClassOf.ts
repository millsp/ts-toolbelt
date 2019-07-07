/* eslint-disable fp/no-this */
import {Function} from './Function'
import {Parameters} from './Parameters'
import {Return} from './Return'

/** Create a class from a **`Function`**
 * @param F
 * @returns **`class`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * type Clazz = F.ClassOf<(name: string) => {
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
export type ClassOf<F extends Function> =
    new (...args: Parameters<F>) => Return<F>
