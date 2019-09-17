import {NumberOf} from '../Number/NumberOf'
import {Formats} from '../Iteration/_Internal'
import {Tuple} from './Tuple'

/** Get the length of **`T`**
 * @param T to get length
 * @param fmt output (?=`'n'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * ```
 */
export type Length<T extends Tuple, fmt extends Formats = 'n'> =  {
    's': NumberOf<T['length']>
    'n': T['length']
}[fmt]
