import {Omit} from './Omit'
import {Tuple} from './Tuple'
import {LastIndex} from './LastIndex'
import {Required} from '../Tuple/Required'

/** Remove the last element out of **`T`**
 * @param T to remove from
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pop<T extends Tuple> =
    Omit<T, LastIndex<Required<T>, 's'>>
