import {Prepend} from '../Tuple/Prepend'
import {Reverse} from '../Tuple/Reverse'
import {Optional} from '../Tuple/Optional'
import {Equals, Cast} from '../Any/_api'
import {Index} from '../_Internal'
import {NonNullable} from '../Tuple/NonNullable'
import {Contains} from '../Any/Contains'

type _Paths<O, Paths extends Index[] = []> = {
    0: {[K in keyof O]: _Paths<O[K], Prepend<Paths, K>>}[keyof O]
    // It dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullable<Optional<Reverse<Paths>>> // make optional
}[
    [keyof O] extends [never] // Then if we can't go deeper
    ? 1                       // We return accumulated path
    : O extends object        // Otherwise if it's an `object`
      ? 0                     // We can continue going deeper
      : 1                     // We return accumulated path
] // #bit-crazy

/** Get all the possible paths of **`O`**
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<O extends object> = {
    1: Index[]
    0: _Paths<O>
}[Equals<O, any>] extends infer X
? Cast<X, Index[]>
: never
