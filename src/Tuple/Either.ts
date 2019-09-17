import {Index} from '../_Internal'
import {Either as OEither} from '../Object/Either'
import {ObjectOf} from './ObjectOf'
import {TupleOf} from '../Object/TupleOf'
import {Tuple} from './Tuple'

/** Split **`T`** into a **union** with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param T to split
 * @param K to split with
 * @returns **`any[]`** **union**
 * @example
 * ```ts
 * ```
 */
export type Either<T extends Tuple, K extends Index> =
    TupleOf<OEither<ObjectOf<T>, K>>
