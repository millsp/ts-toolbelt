import {Key} from '../Any/Key'
import {NonNullableFlat} from '../Object/NonNullable'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {BuiltIn} from '../Misc/BuiltIn'
import {Primitive} from '../Misc/Primitive'
import {Length} from '../List/Length'
import {Keys} from '../Any/Keys'

/**
 * @hidden
 */
type UnionOf<A> =
    A extends List
    ? A[number]
    : A[keyof A]

/**
 * @hidden
 */
type _Paths<O, P extends List = []> = UnionOf<{
    [K in keyof O]:
    O[K] extends BuiltIn | Primitive ? NonNullableFlat<[...P, K?]> :
    [Keys<O[K]>] extends [never] ? NonNullableFlat<[...P, K?]> :
    12 extends Length<P> ? NonNullableFlat<[...P, K?]> :
    _Paths<O[K], [...P, K?]>
}>

/**
 * Get all the possible paths of `O`
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @returns [[String]][]
 * @example
 * ```ts
 * ```
 */
export type Paths<O, P extends List = []> =
    _Paths<O, P> extends infer X
    ? Cast<X, List<Key>>
    : never
