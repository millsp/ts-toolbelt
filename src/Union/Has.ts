import {Intersect} from './Intersect'
import {True, False} from '../Boolean/Boolean'
import {Union} from './Union'

/** Check whether **`U`** contains **`A`**
 * (**`U`** & **`A`** can be interchanged)
 * @param U to be inspected
 * @param A to check within
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type Has<U extends Union, A extends Union> =
    [Intersect<U, A>] extends [never]
    ? False
    : True
