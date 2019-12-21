import {Omit as OOmit} from '../Object/Omit'
import {ListOf} from '../Object/ListOf'
import {Key} from '../Any/Key'
import {List} from './List'
import {ObjectOf} from './ObjectOf'

/** Remove out of **`L`** the entries of key **`K`**
 * @param L to remove from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Omit<L extends List, K extends Key> =
    ListOf<OOmit<ObjectOf<L>, K>>
