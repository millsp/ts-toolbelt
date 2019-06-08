import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {List} from '../_Internal'
import {Cast} from '../Any/Cast'

/** Make **`T`** required (deeply or not)
 * @param T to make required
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export type Required<T extends List, depth extends Depth = 'flat'> =
    ORequired<T, keyof T, depth> extends infer X
    ? Cast<X, List>
    : never
