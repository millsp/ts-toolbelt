import {KeySet} from './KeySet'
import {Number} from '../Number/Number'
import {Pick} from './Pick'
import {List} from './List'

/** Pick a range of entries (portion) from **`T`**
 * @param T to pick from
 * @param From to start with
 * @param To to end with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Extract<T extends List, From extends Number, To extends Number> =
    Pick<T, KeySet<From, To>>
