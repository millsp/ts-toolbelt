import {List} from './List'
import {_UnNest} from './UnNest'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type __Flatten<L extends List, LO extends List = []> = {
    0: __Flatten<_UnNest<L>, L>
    1: L
}[
    Equals<L, LO> extends 0
    ? 0
    : 1
]

/**
 * @hidden
 */
export type _Flatten<L extends List> =
    __Flatten<Naked<L>> extends infer X
    ? Cast<X, List>
    : never

/** Remove all dimensions of **`L`** (10 max)
 * @param L to un-nest
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Flatten<L extends List> =
    L extends unknown
    ? _Flatten<L>
    : never
