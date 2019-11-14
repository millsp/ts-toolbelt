import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {Index} from '../Any/_api'

/** Filter out the keys of **`O`** which fields match **`M`**
 * @param O to remove from
 * @param M to select fields
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type FilterKeys<O extends object, M extends any, match extends Match = 'default'> = {
    [K in keyof O]: {
        1: never
        0: K
    }[Is<O[K], M, match>]
}[keyof O] & keyof O & Index

