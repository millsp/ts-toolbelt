import {Tuple} from './Tuple'
import {UnNest} from './UnNest'
import {True} from '../Boolean/Boolean'
import {Includes} from '../Object/Includes'
import {Cast} from '../Any/Cast'

type _Flatten<T extends Tuple> = {
    0: _Flatten<UnNest<T>>
    1: T
}[
    Includes<T, Tuple, 'implements->'> extends True
    ? 0
    : 1
]

/** Remove all dimensions of **`T`** (10 max)
 * @param T to un-nest
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Flatten<T extends Tuple> =
    _Flatten<T> extends infer X
    ? Cast<X, Tuple<any>> // todo this for all tuple casts
    : never
