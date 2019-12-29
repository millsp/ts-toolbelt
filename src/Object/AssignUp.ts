import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeUp} from './MergeUp'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'

/**
 * @hidden
 */
type __AssignUp<O extends object, Os extends List<object>, I extends Iteration = IterationOf<'0'>> = {
    0: __AssignUp<MergeUp<Os[Pos<I>], O>, Os, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
 * @hidden
 */
export type _AssignUp<O extends object, Os extends List<object>> =
    __AssignUp<O, Os> extends infer X
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
      ? _AssignUp<O, Os>
      : never
    : never
