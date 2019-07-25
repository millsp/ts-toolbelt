import {Intersect} from './Intersect'
import {True, False} from '../Boolean/Boolean'

/** Check whether **`U`** contains **`A`** or not
 * (Note: **`U`** & **`A`** can be interchanged)
 * @param U to be inspected
 * @param A to check within
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type Has<U extends any, A extends any> =
    [Intersect<U, A>] extends [never]
    ? False
    : True
