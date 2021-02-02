import {Pop} from '../List/Pop'

/**
 * @ignore
 */
type _Split<S extends string, D extends string, T extends string[] = []> =
    S extends `${infer BS}${D}${infer AS}`
    ? _Split<AS, D, [...T, BS]>
    : [...T, S]

/**
 * Split `S` by `D` into a [[List]]
 * @param S to split up
 * @param D to split at
 */
export type Split<S extends string, D extends string = ''> =
    D extends '' ? Pop<_Split<S, D>> : _Split<S, D>
