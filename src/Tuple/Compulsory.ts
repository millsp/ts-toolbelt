import {Depth} from '../Object/_Internal'
import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {Cast} from '../Any/Cast'

/** Make **`T`** compulsory (deeply or not)
 * @param T to make compulsory
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Compulsory<T extends any[], depth extends Depth = 'flat'> =
    Cast<OCompulsory<T, keyof T, depth>, any[]>
