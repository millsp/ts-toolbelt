import {Pick as OPick} from '../Object/Pick'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'
import {Cast} from '../Any/Cast'

/** Extract out of **`T`** the entries of key **`K`**
 * @param T to extract from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 */
export type Pick<T extends any[], K extends string> =
    TupleOf<OPick<T, K>, Length<T, 's'>> extends infer X
    ? Cast<X, any[]>
    : never
