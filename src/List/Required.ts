import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make **`T`** required (deeply or not)
 * @param T to make required
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Required<T extends List, depth extends Depth = 'flat'> =
    Cast<ORequired<T, keyof T, depth>, List>
