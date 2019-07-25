import {NumberOf} from '../Number/NumberOf'
import {Formats} from '../Iteration/_Internal'

/** Get the length of **`T`**
 * @param T to get length
 * @param fmt output (?=`'n'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * ```
 */
export type Length<T extends any[], fmt extends Formats = 'n'> =  {
    's': NumberOf<T['length']>
    'n': T['length']
}[fmt]
