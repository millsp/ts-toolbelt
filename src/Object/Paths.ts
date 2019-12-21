import {Prepend} from '../List/Prepend'
import {Reverse} from '../List/Reverse'
import {Optional} from '../List/Optional'
import {Key} from '../Any/Key'
import {NonNullable} from '../List/NonNullable'
import {Concat} from '../List/Concat'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {True} from '../Boolean/Boolean'
import {List} from '../List/List'

/**
 * @hidden
 */
type _Paths<O, Paths extends List<Key> = []> = {
    0: {[K in keyof O]: _Paths<O[K], Prepend<Paths, K>>}[keyof O]
    // It dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullable<Optional<Reverse<Paths>>> // make optional
    2: NonNullable<Optional<Concat<Reverse<Paths>, Key[]>>>
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
    ? Cast<X, List<Key>>
    : never
