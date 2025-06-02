import {Key} from '../Any/Key'
import {Cast} from '../Any/Cast'
import {Extends} from '../Any/Extends'
import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {List} from '../List/List'
import {Length} from '../List/Length'
import {At} from '../Any/At'
import {Primitive} from '../Misc/Primitive'

type _ExcludePrimitiveKeys<O> = O extends Primitive ? Omit<O, keyof O> : O;

/**
 * @ignore
 */
type _Path<O, P extends List<Key>,  I extends Iteration = IterationOf<0>> = {
    0: _Path<At<_ExcludePrimitiveKeys<O>, P[Pos<I>]>, P, Next<I>>
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
export type Path<O extends any, P extends List<Key>> =
    _Path<O, P> extends infer X
    ? Cast<X, any>
    : never
