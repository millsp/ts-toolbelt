import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {TupleOf} from '../Object/TupleOf'
import {Cast} from '../Any/Cast'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {Implements} from '../Any/Implements'
import {Tuple} from './Tuple'

/** Make some entries of **`T`** not nullable (deeply or not)
 * @param T to make non nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type NonNullable<T extends Tuple, K extends Index = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONonNullable<T, keyof T, depth>, Tuple>
    0: TupleOf<ONonNullable<ObjectOf<T>, K, depth>>
}[Implements<keyof T, K>]
