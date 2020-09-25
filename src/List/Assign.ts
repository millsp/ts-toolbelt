import {Assign as OAssign} from '../Object/Assign'
import {List} from './List'
import {ObjectOf} from './ObjectOf'
import {ListOf} from '../Object/ListOf'
import {Depth} from '../Object/_Internal'

/**
 * Assign a list of [[List]] into `L` with [[Merge]]. Merges from left to
 * right, first items get overridden by the next ones (last-in overrides).
 * @param L to assign to
 * @param Ls to assign
 * @param depth (?=`'flat'`) to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = Assign<[1, 2, 3], [[2, 1]]> // [2, 1, 3]
 * type test1 = Assign<[], [[1, 2, 3, 4], [2, 4, 6]]> // [2, 4, 6, 4]
 * type test2 = Assign<[0, 0, 0, 0, 0], [[0, 1], [0, 2, 0, 4?]]> // [0, 2, 0, 0 | 4, 0]
 * ```
 */
export type Assign<L extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    ListOf<OAssign<ObjectOf<L>, {[K in keyof Ls]: ObjectOf<Ls[K] & List>}, depth>>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
