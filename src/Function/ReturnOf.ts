import {Arrow} from './Arrow'

/** Extract the return type of a **`Function`**
 * @param F to extract from
 * @returns **`any`**
 * @example
 */
export type ReturnOf<F extends Arrow> =
    F extends ((...args: any[]) => infer R)
    ? R
    : never
