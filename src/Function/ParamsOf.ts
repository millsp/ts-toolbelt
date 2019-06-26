import {Arrow} from './Arrow'

/** Extract parameters from a **`Function`**
 * @param F to extract from
 * @returns **`any[]`**
 * @example
 * ```ts
 * const fn = (name: string, age: number) => {}
 *
 * type test0 = ParamsOf<typeof fn>                         // [string, number]
 *
 * type test1 = ParamsOf<(name: string, age: number) => {}> // [string, number]
 * ```
 */
export type ParamsOf<F extends Arrow> =
    F extends ((...args: infer T) => any)
    ? T
    : never
