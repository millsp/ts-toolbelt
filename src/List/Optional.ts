import {Optional as OOptional} from '../Object/Optional'
import {Depth} from '../Object/_Internal'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make **`T`** optional (deeply or not)
 * @param T to make optional
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Optional<T extends List, depth extends Depth = 'flat'> =
    Cast<OOptional<T, keyof T, depth>, List>
