import {Index} from '../Any/Index'
import {Cast} from '../Any/Cast'
import {Implements} from '../Any/Implements'
import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {TupleOf} from '../Object/TupleOf'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Make some entries of **`T`** nullable (deeply or not)
 * @param T to make nullable
 * @param K to choose entries (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<T extends Tuple, K extends Index = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<T, Index, depth>, Tuple>
    0: TupleOf<ONullable<ObjectOf<T>, K, depth>>
}[Implements<keyof T, K>]
