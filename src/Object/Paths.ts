import {Prepend} from '../Tuple/Prepend'
import {Reverse} from '../Tuple/Reverse'
import {Optional} from '../Tuple/Optional'
import {Equals, Cast, Extends} from '../Any/_api'
import {Index} from '../_Internal'
import {NonNullable} from '../Tuple/NonNullable'
import {Concat} from '../Tuple/Concat'

type _Paths<O, Paths extends Index[] = []> = {
    0: {[K in keyof O]: _Paths<O[K], Prepend<Paths, K>>}[keyof O]
    // It dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullable<Optional<Reverse<Paths>>> // make optional
    2: NonNullable<Optional<Concat<Reverse<Paths>, Index[]>>>
}[
    {
        1: 2
        0: {
            1: 1
            0: 0
        }[Extends<[keyof O], [never]>]
    }[Equals<O, any>]
] // #bit-crazy

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
    ? Cast<X, Index[]>
    : never
