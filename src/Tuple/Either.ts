import {Index} from '../Any/Index'
import {Either as OEither} from '../Object/Either'
import {ObjectOf} from './ObjectOf'
import {TupleOf} from '../Object/TupleOf'
import {Tuple} from './Tuple'
import {True, Boolean} from '../Boolean/Boolean'

/** Split **`T`** into a **union** with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param T to split
 * @param K to split with
 * @param strict to force excess property checks (?=`True`) https://github.com/microsoft/TypeScript/issues/20863
 * @returns **`any[]`** **union**
 * @example
 * ```ts
 * ```
 */
export type Either<T extends Tuple, K extends Index, strict extends Boolean = True> =
    OEither<ObjectOf<T>, K, strict> extends infer OE
    ? OE extends unknown ? TupleOf<OE & {}> : never
    : never
