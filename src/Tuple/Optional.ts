import {Optional as OOptional} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {List} from '../_Internal'
import {Cast} from '../Any/Cast'

/** Make **`T`** optional (deeply or not)
 * @param T to make optional
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export type Optional<T extends List, depth extends Depth = 'flat'> =
    OOptional<T, keyof T, depth> extends infer X
    ? Cast<X, List>
    : never
