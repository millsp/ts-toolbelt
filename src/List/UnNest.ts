import {_Concat} from './Concat'
import {_Append} from './Append'
import {Cast} from '../Any/Cast'
import {Length} from './Length'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {List} from './List'
import {UnionOf} from './UnionOf'
import {Naked} from './_Internal'
import {Extends} from '../Any/_api'

/**
 * @hidden
 */
type UnNestCheap<L extends List> =
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
type Flatter<L extends List, LN extends List, I extends Iteration> =
    L[Pos<I>] extends List
    ? _Concat<LN, L[Pos<I>]> // if it's a  list
    : _Append<LN, L[Pos<I>]> // if it's an item

/**
 * @hidden
 */
type UnNestExact<L extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: UnNestExact<L, Flatter<L, LN, I>, Next<I>>
    1: LN
}[Extends<Pos<I>, Length<L>>]

/**
 * @hidden
 */
type __UnNest<L extends List> =
    number extends Length<L>
    ? UnNestCheap<L>
    : UnNestExact<L>

/**
 * @hidden
 */
export type _UnNest<L extends List> =
    __UnNest<Naked<L>> extends infer X
    ? Cast<X, List>
    : never

/** Remove a dimension of **`L`**
 * @param L to un-nest
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type UnNest<L extends List> =
    L extends unknown
    ? _UnNest<L>
    : never
