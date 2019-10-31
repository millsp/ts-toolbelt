import {Keys} from './Keys'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {True} from '../Boolean/Boolean'
import {Index} from '../Any/_api'

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
    [K in keyof O]: {
        1: K
        0: never
    }[Is<O[K], M, match>]
}[keyof O] & Index
