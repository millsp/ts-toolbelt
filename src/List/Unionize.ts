import {Index} from '../Any/Index'
import {Unionize as OUnionize} from '../Object/Unionize'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Make the fields of **`L`** union the ones of **`L1`**
 * @param L to union from
 * @param L1 to union with
 * @param depth (?=`'flat'`) to do it deeply
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<L extends List, L1 extends List, K extends Index = keyof L> =
    Cast<OUnionize<L, L1, K>, List>
