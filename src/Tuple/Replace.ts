import {Replace as OReplace} from '../Object/Replace'
import {Match} from '../Any/_Internal'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'

/** Update with **`A`** the entries of **`T`** that match **`M`**
 * @param O to update
 * @param M to select fields
 * @param A to update with
 * @param match to change precision (?=`'default'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Replace<T extends Tuple, M extends any, A extends any, match extends Match = 'default'> =
    Cast<OReplace<T, M, A, match>, Tuple>
