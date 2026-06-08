import {KeySet} from './KeySet'
import {Omit} from './Omit'
import {List} from './List'

/**
 * Remove out of `L` a range of entries
 * @param L to remove from
 * @param From to start from
 * @param To to end with
 * @returns [[List]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = L.Remove<[1, 2, 3, 4], 1, 2> // [1, 4]
 * type test1 = L.Remove<['a', 'b', 'c', 'd'], 0, 1> // ['c', 'd']
 * ```
 */
export type Remove<L extends List, From extends number, To extends number> =
    Omit<L, KeySet<From, To>>
