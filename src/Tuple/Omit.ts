import {Omit as OOmit} from '../Object/Omit'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'

/** Remove out of **`T`** the entries of key **`K`**
 * @param T to remove from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Omit<T extends any[], K extends string> =
    TupleOf<OOmit<T, K>, Length<T, 's'>>
