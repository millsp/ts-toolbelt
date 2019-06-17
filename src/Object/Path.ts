import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'

type _Path<O, Path extends string[], I extends Iteration = IterationOf<'0'>> = {
    0: _Path<UNonNullable<At<O & {}, Path[Pos<I>]>>, Path, Next<I>>
    1: O // Use of `NonNullable` otherwise path cannot be followed #`undefined`
}[
    Pos<I> extends Length<Path>
    ? 1 // Stops before going too deep (last key) & check if it has it
    : 0 // Continue iterating and go deeper within the object with `At`
]

/** Get in **`O`** the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 */
export type Path<O extends object, Path extends string[]> =
    _Path<O, Path> extends infer X
    ? Cast<X, any>
    : never
