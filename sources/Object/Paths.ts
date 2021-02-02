import {OptionalFlat} from '../Object/Optional'
import {Key} from '../Any/Key'
import {NonNullableFlat} from '../Object/NonNullable'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Append} from '../List/Append'
import {BuiltIn} from '../Misc/BuiltIn'
import {Primitive} from '../Misc/Primitive'
import {Length} from '../List/Length'

/**
 * @hidden
 */
type __Paths<O, Paths extends List<Key> = []> =
Length<Paths> extends 10 ? Paths : {
  0: {[K in keyof O]: __Paths<O[K], Append<Paths, K>>}[keyof O]
  1: {[K in keyof O]: __Paths<O[K], Append<Paths, K>>}[keyof O & number]
  // It dives deep, and as it dives, it adds the paths to `Paths`
  2: NonNullableFlat<OptionalFlat<Paths>>
}[
    [keyof O] extends [never] ? 2 :
    O extends BuiltIn | Primitive ? 2 :
    O extends ReadonlyArray<any> ? 1 : 0
]

/**
 * @hidden
 */
export type _Paths<O extends object> =
    __Paths<O> extends infer X
    ? Cast<X, List<Key>>
    : never

/**
 * Get all the possible paths of `O`
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @returns [[String]][]
 * @example
 * ```ts
 * ```
 */
export type Paths<O extends object> =
    O extends unknown
    ? _Paths<O>
    : never
