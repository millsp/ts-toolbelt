import {ReadonlyKeys as OReadonlyKeys} from '../Object/ReadonlyKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the keys of **`T`** that are readonly
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ReadonlyKeys<T extends List> =
    OReadonlyKeys<ObjectOf<T>>
