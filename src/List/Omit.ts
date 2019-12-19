import {Omit as OOmit} from '../Object/Omit'
import {ListOf} from '../Object/ListOf'
import {Index} from '../Any/Index'
import {List} from './List'

/** Remove out of **`L`** the entries of key **`K`**
 * @param L to remove from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Omit<L extends List, K extends Index> =
    ListOf<OOmit<L, K | keyof any[]>>
