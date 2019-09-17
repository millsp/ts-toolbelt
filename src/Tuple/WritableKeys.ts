import {WritableKeys as OWritableKeys} from '../Object/WritableKeys'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get the keys of **`O`** that are writable
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type WritableKeys<T extends Tuple> =
    OWritableKeys<ObjectOf<T>>
