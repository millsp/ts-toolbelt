import {List} from './List'
import {UnNest} from './UnNest'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {False} from '../Boolean/Boolean'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type _Flatten<L extends List, LO extends List = []> = {
    0: _Flatten<UnNest<Naked<L>>, L>
    1: L
}[
    Equals<L, LO> extends False
    ? 0
    : 1
]

/** Remove all dimensions of **`L`** (10 max)
 * @param L to un-nest
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Flatten<L extends List> =
    _Flatten<Naked<L>> extends infer X
    ? Cast<X, List>
    : never
