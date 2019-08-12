import {Omit} from './Omit'
import {Pick} from './Pick'
import {Index} from '../_Internal'
import {Strict} from '../Union/Strict'

/** Split **`O`** into a **union** with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param O to split
 * @param K to split with
 * @returns **`object`** **union**
 * @example
 * ```ts
 * ```
 */
export type Either<O extends object, K extends Index> =
    Strict<Omit<O, K> & {    // Merge all but K
        [P in K]: Pick<O, P> // With K possibilities
    }[K]> & {}
