import {ReadonlyKeys as OReadonlyKeys} from '../Object/ReadonlyKeys'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ReadonlyKeys<T extends Tuple> =
    OReadonlyKeys<ObjectOf<T>>
