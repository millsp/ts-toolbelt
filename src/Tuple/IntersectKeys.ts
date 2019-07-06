import {Match} from '../Any/_Internal'
import {IntersectKeys as OIntersectKeys} from '../Object/IntersectKeys'
import {Exclude} from '../Union/Exclude'

/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type IntersectKeys<T extends any[], T1 extends any[], match extends Match = 'default'> =
    Exclude<OIntersectKeys<T, T1, match>, keyof any[]>
