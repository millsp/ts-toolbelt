import {Keys} from './Keys'
import {Intersect} from '../Union/Intersect'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {At} from './At'
import {Replace} from '../Union/Replace'

type IntersectMatch<O extends object, O1 extends object, match extends Match> = {
    [K in Keys<O>]: {
        1: K
        0: never
    }[Is<O[K], At<O1, K>, match>]
}[Keys<O>]

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
    'default'  : Intersect<keyof O, keyof O1>
    'contains' : IntersectMatch<O, O1, 'contains'>
    'extends'  : IntersectMatch<O, O1, 'extends'>
    'equals'   : IntersectMatch<O, O1, 'equals'>
    'rcontains': IntersectMatch<O, O1, 'rcontains'>
    'rextends' : IntersectMatch<O, O1, 'rextends'>
    'requals'  : IntersectMatch<O, O1, 'requals'>
}[match]
