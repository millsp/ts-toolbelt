import {Keys} from './Keys'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {True} from '../Boolean/Boolean'

/** Get the keys of **`O`** which fields match **`M`**
 * @param O to extract from
 * @param M to select fields
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type SelectKeys<O extends object, M extends any, match extends Match = 'default'> = {
    [K in Keys<O>]: Is<O[K], M, match> extends True ? K : never
}[Keys<O>]
