import {IntersectKeys} from './IntersectKeys'
import {Match} from '../Any/_Internal'
import {Pick} from './Pick'
import {Cast} from '../Any/Cast'

/** Get the intersecting fields of **`O`** & **`O1`**
 * (If `match = 'default'`, no type checks are done)
 * @param O to check similarities with
 * @param O1 to check similarities against
 * @returns **`object`**
 * @example
 */
export type Intersect<O extends object, O1 extends object, match extends Match = 'default'> =
    Pick<O, IntersectKeys<O, O1, match>> extends infer X
    ? Cast<X, object>
    : never

