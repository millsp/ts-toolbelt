import {Intersect as OIntersect} from '../Object/Intersect'
import {Match} from '../Any/_Internal'
import {ListOf} from '../Object/ListOf'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Intersect<T extends List, T1 extends List, match extends Match = 'default'> =
    ListOf<OIntersect<ObjectOf<T>, ObjectOf<T1>, match>>
