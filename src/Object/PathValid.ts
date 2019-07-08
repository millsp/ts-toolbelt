import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../Tuple/Update'
import {KeySet} from '../Tuple/_api'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Index} from '../_Internal'
import {Extends} from '../Any/Extends'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/_api'

/** Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
type _PathValid<O, Path extends Index[], I extends Iteration = IterationOf<'0'>> = {
    0: _PathValid<UNonNullable<At<O & [], Path[Pos<I>]>>, Path, Next<I>>
    1: Update<Path, KeySet<Key<Prev<I>>, Length<Path, 's'>>, never>
    2: Path
}[
    Extends<[O], [never]> extends True
    ? 1
    : Extends<Pos<I>, Length<Path>> extends True
      ? 2
      : 0
    // {
    //     1: 1
    //     0: {
    //         1: 2
    //         0: 0
    //     }[Equals<Pos<I>, Length<Path>>]
    // }[Extends<[O], [never]>]
]

type O = {
    0: O
    b: ''
}

type t = PathValid<O, [0, 0, 'b']>

/** Get in **`O`** the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<O extends object, Path extends Index[]> =
    _PathValid<O, Path> extends infer X
    ? Cast<X, Index[]>
    : never
