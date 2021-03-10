import {Key} from '../Any/Key'
import {NonNullableFlat} from './NonNullable'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {BuiltIn} from '../Misc/BuiltIn'
import {Primitive} from '../Misc/Primitive'
import {Length} from '../List/Length'
import {Keys} from '../Any/Keys'
import {Boolean} from '../Boolean/_Internal';

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
type _PathsOptional<O, P extends List, Ignore> = UnionOf<{
    [K in keyof O]:
    O[K] extends BuiltIn | Primitive | Ignore ? NonNullableFlat<[...P, K?]> :
    [Keys<O[K]>] extends [never] ? NonNullableFlat<[...P, K?]> :
    12 extends Length<P> ? NonNullableFlat<[...P, K?]> :
    _PathsOptional<O[K], [...P, K?], Ignore>
}>

/**
 * @hidden
 */
type _PathsRequired<O, P extends List, Ignore> = UnionOf<{
    [K in keyof O]:
    O[K] extends BuiltIn | Primitive | Ignore ? NonNullableFlat<[...P, K]> :
    [Keys<O[K]>] extends [never] ? NonNullableFlat<[...P, K]> :
    12 extends Length<P> ? NonNullableFlat<[...P, K]> :
    NonNullableFlat<[...P, K]> | _PathsRequired<O[K], [...P, K], Ignore>
}>

/**
 * @hidden
 */
type _Paths<O, P extends List, Required extends Boolean, Ignore> = {
    0: _PathsOptional<O, P, Ignore>;
    1: _PathsRequired<O, P, Ignore>;
}[Required]

/**
 * Get all the possible paths of `O`
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @returns [[String]][]
 * @example
 * ```ts
 * ```
 */
export type Paths<O, P extends List = [], Required extends Boolean = 0, Ignore = never> =
    _Paths<O, P, Required, Ignore> extends infer X
    ? Cast<X, List<Key>>
    : never
