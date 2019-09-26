import {Omit as OOmit} from '../Object/Omit'
import {TupleOf} from '../Object/TupleOf'
import {ObjectOf} from './ObjectOf'
import {Index} from '../Any/Index'
import {Tuple} from './Tuple'

/** Remove out of **`T`** the entries of key **`K`**
 * @param T to remove from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Omit<T extends Tuple, K extends Index> =
    TupleOf<OOmit<ObjectOf<T>, K>>
