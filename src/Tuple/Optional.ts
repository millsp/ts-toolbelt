import {Optional as OOptional} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {Cast} from '../Any/Cast'

/** Make **`T`** optional (deeply or not)
 * @param T to make optional
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Optional<T extends any[], depth extends Depth = 'flat'> =
    Cast<OOptional<T, keyof T, depth>, any[]>
