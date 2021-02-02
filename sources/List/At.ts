import {At as OAt} from '../Object/At'
import {Key} from '../Any/Key'
import {List} from './List'

/**
 * Get in `L` the type of an entry of key `K`.
 * @param L to extract from
 * @param K to extract at
 * @returns [[Any]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = L.At<[1, 2, 3], 1> // 2
 * type test1 = L.At<[{a: string}, {b: string}], 0> // {a: string}
 * ```
 */
export type At<L extends List, K extends Key> =
    OAt<L, K>
