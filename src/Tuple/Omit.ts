import {Omit as OOmit} from '../Object/Omit'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {List} from '../_Internal'

/** Remove out of **`T`** the entries of key **`K`**
 * @param T to remove from
 * @param K to chose entries
 * @returns **`List`**
 * @example
 */
export type Omit<T extends List, K extends string> =
    TupleOf<OOmit<T, K>, Length<T, 's', 'max'>> extends infer X
    ? Cast<X, List>
    : never
