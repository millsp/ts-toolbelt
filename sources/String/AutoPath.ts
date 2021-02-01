import {Key} from '../Any/Key'
import {Try} from '../Any/Try'
import {List} from '../List/List'
import {Pop} from '../List/Pop'
import {Keys} from '../Object/Keys'
import {Path} from '../Object/Path'
import {UnionOf} from '../Object/UnionOf'
import {Join} from './Join'
import {Split} from './Split'

type Index = (number | string)

type KeyToIndex<K extends Key> =
    number extends K ? '_' : K & Index

type MetaPath<O, SP extends List<Index> = []> = {
    [K in keyof O]:
    | (Join<[...SP, KeyToIndex<K>], '.'>)
    | (MetaPath<O[K], [...SP, KeyToIndex<K>]>)
}

type NextPath<OP extends unknown> =
    // the next paths after property `K` are on sub objects
    // O[K] === K | {x: '${K}.x' | {y: '${K}.x.y' ...}}
    // So we access O[K] then we only keep the next paths
    // To do this, we can just exclude `string` out of it:
    // O[K] === {x: '${K}.x' | {y: '${K}.x.y' ...}}
    // To do this, we create a union of what we just got
    // This will yield a union of paths and meta paths
    // We exclude the next paths (meta) paths by excluding
    // `object`. Then we are left with the direct next path
    Try<UnionOf<Exclude<OP, string> & {}>, string>

type ExecPath<O extends object, SP extends List<Index>> =
    // We go in the `MetaPath` of `O` to get the prop at `SP`
    // So we query what is going the `NextPath` at `O[...SP]`
    NextPath<Path<MetaPath<O, SP>, SP, 0>>

type HintPath< O extends object, P extends string, Exec extends string, SP extends List<Index>> =
    [Exec] extends [never] // if has not found paths
    ? ExecPath<O, Pop<SP>> // display previous paths
    : Exec | P             // display current + next

export type AutoPath<O extends object, P extends string, SP extends List<Index> = Split<P, '.'>> =
    P extends '' ? Keys<O> : HintPath<O, P, ExecPath<O, SP>, SP>

declare function get<O extends object, P extends string>(
    obj: O, path: AutoPath<O, P>
): Path<O, Split<P, '.'>, 0>;

declare const object: O

type O = {
    a: O
    x: O
    y: O
    z: O
    f: O
    g: O
    d: O[]
}

const test0 = get(object, 'd.100.a.d')
const test1 = get(object, 'a.a.a.a')
