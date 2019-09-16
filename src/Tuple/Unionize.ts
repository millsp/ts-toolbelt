import {Unionize} from '../Object/Unionize'
import {Index} from '../_Internal'

/** Make the fields of **`T`** union the ones of **`T1`**
 * @param T to union from
 * @param T1 to union with
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<T extends object, T1 extends object, K extends Index = keyof T> =
    Unionize<T, T1, K>
