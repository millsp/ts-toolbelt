import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {MergeUp} from './MergeUp'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../Tuple/Length'
import {Cast} from '../Any/Cast'
import {Tuple} from '../Tuple/Tuple'
import {Key} from '../Iteration/Key'

type _Assign<O extends object, Os extends Tuple<object>, I extends Iteration = IterationOf<'0'>> = {
    0: _Assign<MergeUp<Os[Pos<I>], O>, Os, Next<I>>
    1: O
}[
    Key<I> extends Length<Os, 's'>
    ? 1
    : 0
]

/** Assign a list of **`object`** into **`O`** with **`MergeUp`** (last-in combines or overrides)
 * @param O to assign to
 * @param Os to assign
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type AssignUp<O extends object, Os extends Tuple<object>> =
    _Assign<O, Os> extends infer X
    ? Cast<X, object>
    : never
