import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make **`L`** required (deeply or not)
 * @param L to make required
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Required<L extends List, depth extends Depth = 'flat'> =
    Cast<ORequired<L, any, depth>, List>
