import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/**
 * Get the keys of `L` that are [[Compulsory]].
 *
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param L
 * @returns [[Key]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt'
 *
 * type test0 = L.CompulsoryKeys<[1, 2, 3]> // {0: 1, 1: 2, 2: 3}
 * ```
 */
export type CompulsoryKeys<L extends List> =
    OCompulsory<ObjectOf<L>>
