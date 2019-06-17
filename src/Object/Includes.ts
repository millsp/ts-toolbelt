import {SelectKeys} from './SelectKeys'
import {Match} from '../Any/_Internal'

/** Check whether **`O`** has fields that match **`M`**
 * @param O to be inspected
 * @param M to check field type
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export type Includes<O extends object, M extends any, match extends Match = 'default'> =
    [SelectKeys<O, M, match>] extends [never]
    ? false
    : true
