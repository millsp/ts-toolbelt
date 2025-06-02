import {Key} from '../Any/Key'
import {Head} from '../List/Head'
import {List} from '../List/List'
import {Pop} from '../List/Pop'
import {Tail} from '../List/Tail'
import {Path} from '../Object/Path'
import {UnionOf} from '../Object/UnionOf'
import {Select} from '../Union/Select'
import {Join} from '../String/Join'
import {Split} from '../String/Split'

/**
 * @ignore
 */
type Index = number | string;

/**
 * @ignore
 */
type KeyToIndex<K extends Key, SP extends List<Index>> =
  number extends K ? Head<SP> : K & Index;

/**
 * @ignore
 */
type MetaPath<O, D extends string, SP extends List<Index> = [], P extends List<Index> = []> = {
  [K in keyof O]:
    | Exclude<MetaPath<O[K], D, Tail<SP>, [...P, KeyToIndex<K, SP>]>, string>
    | Join<[...P, KeyToIndex<K, SP>], D>;
};

/**
 * @ignore
 */
type NextPath<OP> =
  // the next paths after property `K` are on sub objects
  // O[K] === K | {x: '${K}.x' | {y: '${K}.x.y' ...}}
  // So we access O[K] then we only keep the next paths
  // To do this, we can just exclude `string` out of it:
  // O[K] === {x: '${K}.x' | {y: '${K}.x.y' ...}}
  // To do this, we create a union of what we just got
  // This will yield a union of paths and meta paths
  // We exclude the next paths (meta) paths by excluding
  // `object`. Then we are left with the direct next path
  Select<UnionOf<Exclude<OP, string> & {}>, string>;

/**
 *  @ignore
 */
type CurrentPath<OP> =
  // Uses the reversed logic of NextPath to extract the
  // current path from the meta paths
  Select<Exclude<OP, object>, string>;

/**
 * @ignore
 */
type ExecPath<A, SP extends List<Index>, Delimiter extends string> =
  // We go in the `MetaPath` of `O` to get the prop at `SP`
  // So we query what is going the `NextPath` at `O[...SP]`
  NextPath<Path<MetaPath<A, Delimiter, SP>, SP>>;

/**
 * @ignore
 */
type HintPath<A, P extends string, SP extends List<Index>, Exec extends string, D extends string> = [Exec] extends [never] // if has not found paths
? CurrentPath<Path<MetaPath<A, D, SP>, SP>> extends never // no current path
  ? ExecPath<A, Pop<SP>, D> // display previous paths
  : CurrentPath<Path<MetaPath<A, D, SP>, SP>> // display current path
  : Exec | P; // display current + next

/**
 * @ignore
 */
type _AutoPath<A, P extends string, D extends string, SP extends List<Index> = Split<P, D>> =
  HintPath<A, P, SP, ExecPath<A, SP, D>, D>;

/**
 * Auto-complete, validate, and query the string path of an object `O`
 * @param O to work on
 * @param P path of `O`
 * @param D (?=`'.'`) delimiter for path
 *
 * ```ts
 * declare function get<O extends object, P extends string>(
 *     object: O, path: AutoPath<O, P>
 * ): Path<O, Split<P, '.'>>
 *
 * declare const user: User
 *
 * type User = {
 *     name: string
 *     friends: User[]
 * }
 *
 * // works
 * const friendName = get(user, 'friends.40.name')
 * const friendFriendName = get(user, 'friends.40.friends.12.name')
 *
 * // errors
 * const friendNames = get(user, 'friends.40.names')
 * const friendFriendNames = get(user, 'friends.40.friends.12.names')
 * ```
 */
export type AutoPath<O extends any, P extends string, D extends string = '.'> =
  _AutoPath<O, P, D>;
