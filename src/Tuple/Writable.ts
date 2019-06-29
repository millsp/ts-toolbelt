import {Depth} from '../Object/_Internal'
import {Writable as OWritable} from '../Object/Writable'
import {Cast} from '../Any/Cast'

/** Make **`T`** writable (deeply or not)
 * @param T to make writable
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Writable<T extends readonly any[] | any[], depth extends Depth = 'flat'> =
    Cast<OWritable<T, keyof T, depth>, any[]>
