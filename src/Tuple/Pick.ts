import {Pick as OPick} from '../Object/Pick'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'

/** Extract out of **`T`** the entries of key **`K`**
 * @param T to extract from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pick<T extends any[], K extends string> =
    TupleOf<OPick<T, K>, Length<T, 's'>>
