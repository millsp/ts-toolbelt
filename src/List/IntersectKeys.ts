import {Match} from '../Any/_Internal'
import {IntersectKeys as OIntersectKeys} from '../Object/IntersectKeys'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type IntersectKeys<T extends List, T1 extends List, match extends Match = 'default'> =
    OIntersectKeys<ObjectOf<T>, T1, match>
