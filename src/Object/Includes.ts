import {SelectKeys} from './SelectKeys'
import {Equals} from '../Any/Equals'
import {Match} from '../Any/_Internal'
import {Not} from '../Boolean/Not'

/** Check whether **`O`** has fields that match **`M`**
 * @param O to be inspected
 * @param M to check field type
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export type Includes<O extends object, M extends any, match extends Match = 'default'> =
    Not<Equals<SelectKeys<O, M, match>, never>>
