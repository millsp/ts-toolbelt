import {Class} from './Class'

/** Get the parameters of a class constructor
 * @param C **typeof** **`class`**
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Parameters<C extends Class> =
    C extends Class<infer P, any>
    ? P
    : never
