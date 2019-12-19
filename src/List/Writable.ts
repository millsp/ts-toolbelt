import {Depth} from '../Object/_Internal'
import {Writable as OWritable} from '../Object/Writable'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make **`L`** writable (deeply or not)
 * @param L to make writable
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Writable<L extends List, depth extends Depth = 'flat'> =
    Cast<OWritable<L, keyof L, depth>, List>
