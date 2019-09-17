import {SelectKeys} from './SelectKeys'
import {Match} from '../Any/_Internal'
import {Pick} from './Pick'

/** Extract the fields of **`O`** that match **`M`**
 * @param O to extract from
 * @param M to select fields
 * @param match to change precision (?=`'default'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Select<O extends object, M extends any, match extends Match = 'default'> =
    Pick<O, SelectKeys<O, M, match>>
