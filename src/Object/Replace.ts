import {Record} from './Record'
import {SelectKeys} from './SelectKeys'
import {Modx} from './_Internal'
import {Match} from '../Any/_Internal'
import {Overwrite} from './Overwrite'

/** Update with **`A`** the fields of **`O`** that match **`M`**
 * @param O to update
 * @param M to select fields
 * @param A to update with
 * @param modx to set modifiers (?=['!', 'W'])
 * @param match to change precision (?=`'default'`)
 * @returns **`object`**
 * @example
 */
export type Replace<O extends object, M extends any, A extends any, modx extends Modx = ['!', 'W'], match extends Match = 'default'> =
    Overwrite<O, Record<SelectKeys<O, M, match>, A, modx>>
