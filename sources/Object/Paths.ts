import {Key} from '../Any/Key'
import {NonNullableFlat} from './NonNullable'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {BuiltIn} from '../Misc/BuiltIn'
import {Primitive} from '../Misc/Primitive'
import {Length} from '../List/Length'
import {Keys} from '../Any/Keys'

/**
 * @hidden
 */
type PathMode = 'compact' | 'all' | 'required'

/**
 * @hidden
 */
type UnionOf<A> =
    A extends List
    ? A[number]
    : Exclude<A[keyof A], undefined>

/**
 * @hidden
 */
type _PathsCompact<O, P extends List, Ignore, K extends Key> = UnionOf<{
    [k in keyof O]: k extends K ?
    O[k] extends BuiltIn | Primitive | Ignore ? NonNullableFlat<[...P, k?]> :
    [Keys<O[k]>] extends [never] ? NonNullableFlat<[...P, k?]> :
    12 extends Length<P> ? NonNullableFlat<[...P, k?]> :
    _PathsCompact<O[k], [...P, k?], Ignore, K> :
    never
}>

/**
 * @hidden
 */
type _PathsRequired<O, P extends List, Ignore, K extends Key> = UnionOf<{
    [k in keyof O]: k extends K ?
    O[k] extends BuiltIn | Primitive | Ignore ? NonNullableFlat<[...P, k]> :
    [Keys<O[k]>] extends [never] ? NonNullableFlat<[...P, k]> :
    12 extends Length<P> ? NonNullableFlat<[...P, k]> :
    _PathsRequired<O[k], [...P, k], Ignore, K> :
    never
}>

/**
 * @hidden
 */
type _PathsAll<O, P extends List, Ignore, K extends Key> = UnionOf<{
    [k in keyof O]: k extends K ?
    O[k] extends BuiltIn | Primitive | Ignore ? NonNullableFlat<[...P, k]> :
    [Keys<O[k]>] extends [never] ? NonNullableFlat<[...P, k]> :
    12 extends Length<P> ? NonNullableFlat<[...P, k]> :
    NonNullableFlat<[...P, k]> | _PathsAll<O[k], [...P, k], Ignore, K> :
    never
}>

/**
 * @hidden
 */
type _Paths<O, P extends List, M extends PathMode, Ignore, K extends Key> = {
    compact: _PathsCompact<O, P, Ignore, K>;
    required: _PathsRequired<O, P, Ignore, K>;
    all: _PathsAll<O, P, Ignore, K>;
}[M]

/**
 * Get all the possible paths of `O`
 * (⚠️ this won't work with circular-refs)
 * @param O to be inspected
 * @param Mode indicate if you want all possible individual paths, or the compact version or the non optional compact version (required)
 * @param Ignore types to avoid inspecting their paths
 * @param K choose key types to include in the paths
 * @returns [[String]][]
 * @example
 * ```ts
 * ```
 */
export type Paths<O, P extends List = [], Mode extends PathMode = 'compact', Ignore = never, K extends Key = Key> =
    _Paths<O, P, Mode, Ignore, K> extends infer X
    ? Cast<X, List<K>>
    : never
