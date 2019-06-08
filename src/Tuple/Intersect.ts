import {Intersect as OIntersect} from '../Object/Intersect'
import {Match} from '../Any/_Internal'
import {TupleOf} from '../Object/TupleOf'
import {Longest} from './Longest'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

/** Get the intersecting entries of **`T`** & **`T1`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to check similarities with
 * @param T1 to check similarities against
 * @returns **`List`**
 * @example
 */
export type Intersect<T extends List, T1 extends List, match extends Match = 'default'> =
    TupleOf<OIntersect<T, T1, match>, Length<Longest<T, T1>, 's', 'max'>> extends infer X
    ? Cast<X, List>
    : never
