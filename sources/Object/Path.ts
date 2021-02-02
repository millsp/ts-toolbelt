import {Key} from '../Any/Key'
import {Cast, Extends} from '../Any/_api'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {List} from '../List/List'
import {Length} from '../List/_api'
import {At} from '../Any/At'

/**
 * @ignore
 */
type _Path<O, P extends List<Key>,  I extends Iteration = IterationOf<0>> = {
    0: _Path<At<O, P[Pos<I>]>, P, Next<I>>
    1: O
}[Extends<Pos<I>, Length<P>>]

/**
 * Get in `O` the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Path<O, P extends List<Key>> =
    _Path<O, P> extends infer X
    ? Cast<X, any>
    : never
