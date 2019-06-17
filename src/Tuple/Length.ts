import {StringOf} from '../Number/StringOf'
import {Format} from '../Iteration/_Internal'

/** Get the length of **`T`**
 * @param T to get length
 * @param fmt output (?=`'n'`)
 * @returns **`string`** or **`number`**
 * @example
 */
export type Length<T extends any[], fmt extends Format = 'n'> =  {
    's': StringOf<T['length']>
    'n': T['length']
}[fmt]
