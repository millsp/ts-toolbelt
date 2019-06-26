import {Arrow} from './Arrow'

/** Extract the return type of a **`Function`**
 * @param F to extract from
 * @returns **`any`**
 * @example
 * ```ts
 * const fn = () => true
 *
 * type test0 = ReturnOf<typeof fn> // boolean
 *
 * type test1 = ReturnOf<() => true> // true
 * ```
 */
export type ReturnOf<F extends Arrow> =
    F extends ((...args: any[]) => infer R)
    ? R
    : never
