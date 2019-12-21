import {Omit} from './Omit'
import {Pick} from './Pick'
import {Key} from '../Any/Key'
import {Strict} from '../Union/Strict'
import {Boolean, True} from '../Boolean/Boolean'
import {Compute} from '../Any/Compute'

/**
 * @hidden
 */
type _Either<O extends object, K extends Key> =
    Omit<O, K> & ({          // Merge all but K
        [P in K]: Pick<O, P> // With K possibilities
    }[K])

/**
 * @hidden
 */
type EitherStrict<O extends object, K extends Key> =
    Strict<_Either<O, K>>

/**
 * @hidden
 */
type EitherLoose<O extends object, K extends Key> =
    Compute<_Either<O, K>>

/** Split **`O`** into a [[Union]] with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param O to split
 * @param K to split with
 * @param strict (?=`True`) to force excess property checks https://github.com/microsoft/TypeScript/issues/20863
 * @returns **`object`** [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Either<O extends object, K extends Key, strict extends Boolean = True> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
}[strict]
