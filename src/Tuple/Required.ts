import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'

/** Make **`T`** required (deeply or not)
 * @param T to make required
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Required<T extends Tuple, depth extends Depth = 'flat'> =
    Cast<ORequired<T, keyof T, depth>, Tuple>
