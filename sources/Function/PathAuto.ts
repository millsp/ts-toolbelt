import {Key} from '../Any/Key'
import {Head} from '../List/Head'
import {List} from '../List/List'
import {Pop} from '../List/Pop'
import {Tail} from '../List/Tail'
import {Path} from '../Object/Path'
import {UnionOf} from '../Object/UnionOf'
import {Select} from '../Union/_api'
import {Join} from '../String/Join'
import {Split} from '../String/Split'

type Index = (number | string)

type KeyToIndex<K extends Key, SP extends List<Index>> =
    number extends K ? Head<SP> : K & Index

type MetaPath<O, SP extends List<Index> = [], P extends List<Index> = []> = {
    [K in keyof O]:
    | MetaPath<O[K] & {}, Tail<SP>, [...P, KeyToIndex<K, SP>]>
    | Join<[...P, KeyToIndex<K, SP>], '.'>
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
    Select<UnionOf<Exclude<OP, string> & {}>, string>

type ExecPath<O extends object, SP extends List<Index>> =
    // We go in the `MetaPath` of `O` to get the prop at `SP`
    // So we query what is going the `NextPath` at `O[...SP]`
    NextPath<Path<MetaPath<O, SP>, SP, 0>>

type HintPath<O extends object, P extends string, SP extends List<Index>, Exec extends string> =
    [Exec] extends [never] // if has not found paths
    ? ExecPath<O, Pop<SP>> // display previous paths
    : Exec | P             // display current + next

type _PathAuto<O extends object, P extends string, SP extends List<Index> = Split<P, '.'>> =
    HintPath<O, P, SP, ExecPath<O, SP>>

export type PathAuto<O extends object, P extends string> =
    _PathAuto<O, P>
