import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'

/** Update with **`A`** the fields of **`O`** that match **`M`**
 * @param O to update
 * @param M to select fields
 * @param A to update with
 * @param match to change precision (?=`'default'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Replace<O extends object, M extends any, A extends any, match extends Match = 'default'> = {
    [K in keyof O]: Is<O[K], M, match> extends true ? A : O[K]
}
