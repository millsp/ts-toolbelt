import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../Tuple/Update'
import {KeySet} from '../Tuple/KeySet'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'
import {Index} from '../_Internal'
import {Extends} from '../Any/Extends'

/** Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
type _PathValid<O, Path extends Index[], I extends Iteration = IterationOf<'0'>> = {
    0: _PathValid<UNonNullable<At<O & {}, Path[Pos<I>]>>, Path, Next<I>>
    1: Update<Path, KeySet<Key<Prev<I>>, Length<Path, 's'>>, never>
}[
    Extends<[O], [never]>
]

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
