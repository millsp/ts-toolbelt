import {Depth} from '../Object/_Internal'
import {Required as ORequired} from '../Object/Required'
import {Cast} from '../Any/Cast'

/** Make **`T`** required (deeply or not)
 * @param T to make required
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 */
export type Required<T extends any[], depth extends Depth = 'flat'> =
    Cast<ORequired<T, keyof T, depth>, any[]>
