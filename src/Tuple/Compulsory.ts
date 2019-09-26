import {Depth} from '../Object/_Internal'
import {Compulsory as OCompulsory} from '../Object/Compulsory'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'

/** Make **`T`** compulsory (deeply or not)
 * @param T to make compulsory
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Compulsory<T extends Tuple, depth extends Depth = 'flat'> =
    Cast<OCompulsory<T, keyof T, depth>, Tuple>
