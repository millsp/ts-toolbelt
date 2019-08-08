import {Length} from './Length'
import {Formats} from '../Iteration/_Internal'
import {Tail} from './Tail'

/** Get the last index of **`T`**
 * @param T to get from
 * @param fmt output (?=`'n'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * ```
 */
export type EndOf<T extends any[], fmt extends Formats = 'n'> =
    Length<Tail<T>, fmt>
