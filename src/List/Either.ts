import {Key} from '../Any/Key'
import {Either as OEither} from '../Object/Either'
import {ObjectOf} from './ObjectOf'
import {ListOf} from '../Object/ListOf'
import {List} from './List'
import {True, Boolean} from '../Boolean/Boolean'

/** Split **`L`** into a [[Union]] with **`K`** keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param L to split
 * @param K to split with
 * @param strict (?=`True`) to force excess property checks https://github.com/microsoft/TypeScript/issues/20863
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Either<L extends List, K extends Key, strict extends Boolean = True> =
    OEither<ObjectOf<L>, K, strict> extends infer OE
    ? OE extends unknown
      ? ListOf<OE & {}>
      : never
    : never
