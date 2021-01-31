import {List} from '../List/List'
import {Pop} from '../List/Pop'
import {Keys} from '../Object/Keys'
import {Path} from '../Object/Path'
import {UnionOf} from '../Object/UnionOf'
import {Join} from './Join'
import {Split} from './Split'

type Index = string | number

type MetaPath<O, SP extends List<Index> = []> =
O extends unknown ? {
    [K in keyof O & (string | number)]:
    | Join<[...SP, K], '.'>
    | MetaPath<O[K], [...SP, K]>
} : never

type NextPath<OP extends unknown> =
    // the next paths after property `K` are on sub objects
    // O[K] === K | {x: '${K}.x' | {y: '${K}.x.y' ...}}
    // So we access O[K] then we only keep the next paths
    // To do this, we can just exclude `string` out of it:
    // O[K] === {x: '${K}.x' | {y: '${K}.x.y' ...}}
    // Now  we can get the next path by excluding `object`
    // We will then obtain the very next/direct next path
    Exclude<UnionOf<Exclude<OP, string> & {}>, object> & string

type ExecPath<O extends object, SP extends List<Index>> =
    // We go in the `MetaPath` of `O` to get the prop at `SP`
    // So we query what is going the `NextPath` at `O[...SP]`
    NextPath<Path<MetaPath<O>, SP, 0>>

type HintPath< O extends object, P extends string, Exec extends string, SP extends List<Index>> =
    [Exec] extends [never] // if has not found paths
    ? ExecPath<O, Pop<SP>> // display previous paths
    : Exec | P             // display current + next

export type AutoPath<O extends object, P extends string, SP extends List<Index> = Split<P, '.'>> =
    P extends '' ? Keys<O> : HintPath<O, P, ExecPath<O, SP>, SP>

declare const object: O

declare function get<O extends object, P extends string>(
    obj: O, path: AutoPath<O, P>
): Path<O, Split<P, '.'>, 0>;

type O = {
    a: O
    b: {
        c: 1
    } | {
        d: 2
    }
}

const test0 = get(object, 'b.c')
const test1 = get(object, 'focus.currentTarget.addEventListener')
