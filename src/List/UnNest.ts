import {Concat} from './Concat'
import {Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {List} from './List'
import {UnionOf} from './UnionOf'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type _UnNestCheap<L extends List> =
    (UnionOf<L> extends infer UL    // make `L` a union
    ? UL extends unknown            // for each in union
      ? UL extends List             // if its an array
        ? UnionOf<UL>               // make it a union
        : UL                        // or leave as it is
      : never
    : never
    )[] & {}                        // make result array

/**
 * @hidden
 */
type _UnNestExact<L extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _UnNestExact<L, Concat<LN, L[Pos<I>]>, Next<I>>
    1: _UnNestExact<L, Append<LN, L[Pos<I>]>, Next<I>>
    2: LN
}[
    Pos<I> extends Length<L>  // its the end
    ? 2
    : L[Pos<I>] extends List // element is tuple -> concat
      ? 0
      : 1                    // element is other -> Append
]

/**
 * @hidden
 */
type _UnNest<L extends List> =
    number extends Length<L>
    ? _UnNestCheap<L>
    : _UnNestExact<L>

/** Remove a dimension of **`L`**
 * @param L to un-nest
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type UnNest<L extends List> =
    _UnNest<Naked<L>> extends infer X
    ? Cast<X, List>
    : never
