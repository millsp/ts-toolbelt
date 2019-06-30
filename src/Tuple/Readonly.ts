import {Depth} from '../Object/_Internal'
import {Readonly as OReadonly} from '../Object/Readonly'
import {Cast} from '../Any/Cast'

/** Make **`T`** readonly (deeply or not)
 * @param T to make readonly
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<T extends any[], depth extends Depth = 'flat'> =
    OReadonly<T, keyof T, depth> & any[]
