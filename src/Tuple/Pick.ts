import {Pick as OPick} from '../Object/Pick'
import {TupleOf} from '../Object/TupleOf'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Extract out of **`T`** the entries of key **`K`**
 * @param T to extract from
 * @param K to chose entries
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Pick<T extends Tuple, K extends Index> =
    TupleOf<OPick<ObjectOf<T>, K>>
