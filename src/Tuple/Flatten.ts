import {Tuple} from './Tuple'
import {UnNest} from './UnNest'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'

/**
 * @internal
 */
type _Flatten<T extends Tuple, TO extends Tuple = []> = {
    0: _Flatten<UnNest<T>, T>
    1: T
}[
    Equals<T, TO> extends 0
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
    ? Cast<X, Tuple>
    : never
