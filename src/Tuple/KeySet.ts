import {Number} from '../Number/Number'
import {Range} from '../Number/Range'
import {UnionOf} from '../Tuple/UnionOf'

/** Create a set of keys
 * @param From to start with
 * @param To to end with
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type KeySet<From extends Number, To extends Number> =
    UnionOf<Range<From, To, '->'>>
