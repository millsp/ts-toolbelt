import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Merge} from './Merge'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../Tuple/Length'
import {Cast} from '../Any/Cast'

type _Assign<O extends object, Os extends object[], I extends Iteration = IterationOf<'0'>> = {
    0: _Assign<Merge<Os[Pos<I>], O>, Os, Next<I>>
    1: O
}[
    Pos<I> extends Length<Os>
    ? 1
    : 0
]

/** Assign a list of **`object`** into **`O`** (last-in overrides)
 * @param O to assign to
 * @param Os to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Assign<O extends object, Os extends object[]> =
    _Assign<O, Os> extends infer X
    ? Cast<X, object>
    : never
