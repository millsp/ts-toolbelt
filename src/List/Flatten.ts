import {List} from './List'
import {UnNest} from './UnNest'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {False} from '../Boolean/Boolean'

/**
 * @hidden
 */
type _Flatten<T extends List, TO extends List = []> = {
    0: _Flatten<UnNest<T>, T>
    1: T
}[
    Equals<T, TO> extends False
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
export type Flatten<T extends List> =
    _Flatten<T> extends infer X
    ? Cast<X, List>
    : never
