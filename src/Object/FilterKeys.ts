import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {Keys} from './Keys'

/** Filter out the keys of **`O`** which fields match **`M`**
 * @param O to remove from
 * @param M to select fields
 * @param match (?=`'default'`) to change precision
 * @returns **`keyof`**
 * @example
 */
export type FilterKeys<O extends object, M extends any, match extends Match = 'default'> = {
    [K in Keys<O>]: Is<O[K], M, match> extends true ? never : K
}[Keys<O>]
// We filter the output of `_FilterKeys` with `NonNullable` because when we
// deal with `?` fields, a selected key can be `undefined` (isn't possible)
