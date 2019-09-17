import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Get the keys of **`T`** that are compulsory
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type CompulsoryKeys<T extends Tuple> =
    OCompulsory<ObjectOf<T>>
