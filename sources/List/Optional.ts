import {Cast} from '../Any/Cast'
import {OptionalPart} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {List} from './List'

/**
 * Make `L` optional (deeply or not)
 * @param L to make optional
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = L.Optional<[1, 2, 3]> // [1?, 2?, 3?]
 * type test1 = L.Optional<[1, 2, [3, [4]]], 'deep'> // [1?, 2?, [3?, [4?]?]?]
 * ```
 */
export type Optional<L extends List, depth extends Depth = 'flat'> =
    Cast<OptionalPart<L, depth>, List>
