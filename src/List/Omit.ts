import {Omit as OOmit} from '../Object/Omit'
import {ListOf} from '../Object/ListOf'
import {Index} from '../Any/Index'
import {List} from './List'

/** Remove out of **`T`** the entries of key **`K`**
 * @param T to remove from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Omit<T extends List, K extends Index> =
    ListOf<OOmit<T, K | keyof any[]>>
