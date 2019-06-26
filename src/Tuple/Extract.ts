import {KeySet} from './KeySet'
import {Nbr} from '../Number/_Internal'
import {Pick} from './Pick'
import {Cast} from '../Any/Cast'

/** Pick a range of entries (portion) from **`T`**
 * @param T to pick from
 * @param From to start with
 * @param To to end with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Extract<T extends any[], From extends Nbr, To extends Nbr> =
    Pick<T, KeySet<From, To>> extends infer X
    ? Cast<X, any[]>
    : never
