import {Omit} from './Omit'
import {Pick} from './Pick'
import {Index} from '../Any/Index'
import {Strict} from '../Union/Strict'
import {Boolean, True} from '../Boolean/Boolean'
import {Compute} from '../Any/Compute'

type _Either<O extends object, K extends Index> =
    Omit<O, K> & {           // Merge all but K
        [P in K]: Pick<O, P> // With K possibilities
    }[K]

type EitherStrict<O extends object, K extends Index> =
    Strict<_Either<O, K>> & {}

type EitherLoose<O extends object, K extends Index> =
    Compute<_Either<O, K>> & {}

/** Split **`O`** into a **union** with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param O to split
 * @param K to split with
 * @param strict to force excess property checks (?=`True`) https://github.com/microsoft/TypeScript/issues/20863
 * @returns **`object`** **union**
 * @example
 * ```ts
 * ```
 */
export type Either<O extends object, K extends Index, strict extends Boolean = True> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
}[strict]
