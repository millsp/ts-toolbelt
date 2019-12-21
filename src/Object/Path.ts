import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Key} from '../Any/Key'
import {List} from '../List/List'

/**
 * @hidden
 */
type _Path<O, Path extends List<Key>, I extends Iteration = IterationOf<'0'>> = {
    0: _Path<UNonNullable<At<O & {}, Path[Pos<I>], 0>>, Path, Next<I>>
    1: O // Use of `NonNullable` otherwise path cannot be followed #`undefined`
}[
    Pos<I> extends Length<Path>
    ? 1 // Stops before going too deep (last key) & check if it has it
    : 0 // Continue iterating and go deeper within the object with `At`
]

/** Get in **`O`** the type of nested properties
 * For more advanced capabilities, see [[PathUp]]
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<O extends object, Path extends List<Key>> =
    _Path<O, Path> extends infer X
    ? Cast<X, any>
    : never
