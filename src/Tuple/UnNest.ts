import {Tail} from './Tail'
import {Concat} from './Concat'
import {Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {List} from '../_Internal'

type _UnNest<T extends List, TN extends List = []> = {
    0: _UnNest<Tail<T>, Concat<TN, T[0]>>
    1: _UnNest<Tail<T>, Append<TN, T[0]>>
    2: TN
}[
    0 extends Length<T>
    ? 2
    : List extends T[0]
      ? 0
      : 1
]

/** Remove a dimension of **`T`**
 * @param T to un-nest
 * @returns **`List`**
 * @example
 */
export type UnNest<T extends List> =
    _UnNest<T> extends infer X
    ? Cast<X, List>
    : never
