import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {ObjectOf} from './ObjectOf'

/** Get the keys of **`T`** that are compulsory
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type CompulsoryKeys<T extends any[]> =
    OCompulsory<ObjectOf<T>>
