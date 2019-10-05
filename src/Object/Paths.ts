import {Prepend} from '../Tuple/Prepend'
import {Reverse} from '../Tuple/Reverse'
import {Optional} from '../Tuple/Optional'
import {Index} from '../Any/Index'
import {NonNullable} from '../Tuple/NonNullable'
import {Concat} from '../Tuple/Concat'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/Boolean'
import {Tuple} from '../Tuple/Tuple'

type _Paths<O, Paths extends Tuple<Index> = []> = {
    0: {[K in keyof O]: _Paths<O[K], Prepend<Paths, K>>}[keyof O]
    // It dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullable<Optional<Reverse<Paths>>> // make optional
    2: NonNullable<Optional<Concat<Reverse<Paths>, Index[]>>>
}[
    Equals<O, any> extends True   // Handle infinite recursion
    ? 2                           // 1: Exit adding infinite Path
    : O extends object            // 0: > If object
      ? [keyof O] extends [never] // & If recursion has finished
        ? 1                       // 1: Exit
        : 0                       // 0: Continue
      : 1                         // 1: Exit
]

/** Get all the possible paths of **`O`**
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<O extends object> =
    _Paths<O> extends infer X
    ? Cast<X, Tuple<Index>>
    : never
