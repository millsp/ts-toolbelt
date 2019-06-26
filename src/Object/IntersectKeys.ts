import {Keys} from './Keys'
import {Intersect} from '../Union/Intersect'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {At} from './At'
import {Replace} from '../Union/Replace'

/** Get the intersecting keys of **`O`** & **`O1`**
 * (If `match = 'default'`, no type checks are done)
 * @param O to check similarities with
 * @param O1 to check similarities against
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type IntersectKeys<O extends object, O1 extends object, match extends Match = 'default'> = {
    'default': Intersect<keyof O, keyof O1>
    'matches': {[K in Keys<O>]: Is<O[K], At<O1, K>, match> extends true ? K : never}[Keys<O>]
}[Replace<match, 'extends' | 'equals' | 'loose', 'matches'>]
