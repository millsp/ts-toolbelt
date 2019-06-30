import {Intersect as OIntersect} from '../Object/Intersect'
import {Match} from '../Any/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {Longest} from './Longest'
import {Length} from './Length'

/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Intersect<T extends any[], T1 extends any[], match extends Match = 'default'> =
    TupleOf<OIntersect<T, T1, match>>
