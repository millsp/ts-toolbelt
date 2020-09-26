import {Depth} from '../Object/_Internal'
import {CompulsoryPart} from '../Object/Compulsory'
import {List} from './List'

/**
 * Make that `L`'s fields cannot be [[Nullable]] or [[Optional]] (it's like
 * [[Required]] & [[NonNullable]] at once).
 * @param L to make compulsory
 * @param depth (?=`'flat'`) to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = L.Compulsory<[1, 2, 3?, 4?]> // [1, 2, 3, 4]
 * type test1 = L.Compulsory<['a', 'b' | undefined, 'c', 'd', 'e' | null]> // ['a', 'b', 'c', 'd', 'e']
 * ```
 */
export type Compulsory<L extends List, depth extends Depth = 'flat'> =
    CompulsoryPart<L, depth>
