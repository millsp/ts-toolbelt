import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable} from '../Union/NonNullable'
import {Key} from '../Any/Key'
import {List} from '../List/List'
import {Boolean} from '../Boolean/Boolean'

/**
 * @hidden
 */
type __Path<O, Path extends List<Key>, strict extends Boolean, I extends Iteration = IterationOf<'0'>> = {
    0: __Path<NonNullable<At<O & {}, Path[Pos<I>], strict>>, Path, strict, Next<I>>
    1: O // Use of `NonNullable` otherwise path cannot be followed #`undefined`
}[
    Pos<I> extends Length<Path>
    ? 1 // Stops before going too deep (last key) & check if it has it
    : 0 // Continue iterating and go deeper within the object with `At`
]

/**
 * @hidden
 */
export type _Path<O extends object, Path extends List<Key>, strict extends Boolean = 1> =
    __Path<O, Path, strict> extends infer X
    ? Cast<X, any>
    : never

/** Get in **`O`** the type of nested properties
 * For more advanced capabilities, see [[PathUp]]
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type Path<O extends object, Path extends List<Key>, strict extends Boolean = 1> =
    O extends unknown
    ? Path extends unknown
      ? _Path<O, Path, strict>
      : never
    : never
