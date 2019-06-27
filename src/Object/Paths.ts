import {Prepend} from '../Tuple/Prepend'
import {Reverse} from '../Tuple/Reverse'
import {Optional} from '../Tuple/Optional'
import {NonNullable} from '../Tuple/NonNullable'
import {Cast} from '../Any/Cast'
import {Keys} from './Keys'
import {Equals} from '../Any/_api'

type _Paths<O, Paths extends string[] = []> = {
    0: {[K in keyof O]: _Paths<O[K], Prepend<Paths, K>>}[Keys<O & {}>]
    // Dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullable<Optional<Reverse<Paths>>> // make convenient
}[
    [keyof O] extends [never] // Then if we can't go deeper
    ? 1                       // We return accumulated path
    : O extends object        // Otherwise if it's an `object`
      ? 0                     // We can continue going deeper
      : 1                     // We return accumulated path
] // #bit-crazy

/** Get all the possible paths of **`O`**
 * (⚠️ This won't work on self-references)
 * @param O to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<O extends object> =
    Equals<O, any> extends true
    ? string[]
    : _Paths<O> extends infer X
      ? Cast<X, string[]>
      : never
