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
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ExcludeKeys<O extends object, O1 extends object, match extends Match = 'default'> = {
    'default': Exclude<keyof O, keyof O1>
    'matches': {
        [K in Keys<O>]: {
            1: never
            0: K
        }[Is<O[K], At<O1, K>, match>]
    }[Keys<O>]
}[Replace<match, 'extends' | 'equals' | 'loose', 'matches'>]

