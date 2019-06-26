import {Intersect} from './Intersect'

/** Check whether **`U`** contains **`A`** or not
 * (Note: **`U`** & **`A`** can be interchanged)
 * @param U to be inspected
 * @param A to check within
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * ```
 */
export type Has<U extends any, A extends any> =
    [Intersect<U, A>] extends [never]
    ? false
    : true
