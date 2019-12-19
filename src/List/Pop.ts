import {Omit} from './Omit'
import {List} from './List'
import {LastIndex} from './LastIndex'
import {Required} from './Required'

/** Remove the last element out of **`L`**
 * @param L to remove from
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pop<L extends List> =
    Omit<L, LastIndex<Required<L>, 's'>>
