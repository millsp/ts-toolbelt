import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeUp} from './MergeUp'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'

/**
 * @hidden
 */
type _Assign<O extends object, Os extends List<object>, I extends Iteration = IterationOf<'0'>> = {
    0: _Assign<MergeUp<Os[Pos<I>], O>, Os, Next<I>>
    1: O
}[
    Pos<I> extends Length<Os>
    ? 1
    : 0
]

/**
 * @hidden
 */
export type __AssignUp<O extends object, Os extends List<object>> =
    _Assign<O, Os> extends infer X
    ? Cast<X, object>
    : never

/** Assign a list of **`object`** into **`O`** with [[MergeUp]] (last-in combines or overrides)
 * @param O to assign to
 * @param Os to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type AssignUp<O extends object, Os extends List<object>> =
    O extends unknown
    ? Os extends unknown
      ? __AssignUp<O, Os>
      : never
    : never
