import {Omit} from './Omit'
import {List} from './List'
import {LastIndex} from './LastIndex'
import {Required} from './Required'

/** Remove the last element out of **`T`**
 * @param T to remove from
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pop<T extends List> =
    Omit<T, LastIndex<Required<T>, 's'>>
