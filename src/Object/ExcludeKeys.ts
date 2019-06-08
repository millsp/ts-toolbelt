import {Keys} from './Keys'
import {Exclude} from '../Union/Exclude'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {At} from './At'
import {Replace} from '../Union/Replace'

/** Exclude the keys of **`O1`** out of the keys of **`O`**
 * (If `match = 'default'`, no type checks are done)
 * @param O to remove the keys from
 * @param O1 to remove the keys out
 * @param match (?=`'default'`) to change precision
 * @returns **`keyof`**
 * @example
 */
export type ExcludeKeys<O extends object, O1 extends object, match extends Match = 'default'> = {
    'default': Exclude<keyof O, keyof O1>
    'matches': {[K in Keys<O>]: Is<O[K], At<O1, K>, match> extends true ? never : K}[Keys<O>]
}[Replace<match, 'extends' | 'equals' | 'loose', 'matches'>]
// We filter the output of `_ExcludeKeys` with `NonNullable` because when we
// deal with `?` fields, a selected key can be `undefined` (isn't possible)
