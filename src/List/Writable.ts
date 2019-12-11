import {Depth} from '../Object/_Internal'
import {Writable as OWritable} from '../Object/Writable'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make **`T`** writable (deeply or not)
 * @param T to make writable
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Writable<T extends List, depth extends Depth = 'flat'> =
    Cast<OWritable<T, keyof T, depth>, List>
