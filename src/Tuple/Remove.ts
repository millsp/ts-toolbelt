import {Number} from '../Number/Number'
import {KeySet} from './KeySet'
import {Omit} from './Omit'
import {Cast} from '../Any/Cast'

/** Remove out of **`T`** a range of entries
 * @param T to remove from
 * @param From to start with
 * @param To to end with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Remove<T extends any[], From extends Number, To extends Number> =
    Omit<T, KeySet<From, To>>
