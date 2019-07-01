import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {TupleOf} from '../Object/TupleOf'
import {Equals} from '../Any/Equals'
import {Overwrite} from './Overwrite'
import {Cast} from '../Any/Cast'

/** Make some entries of **`T`** not nullable (deeply or not)
 * @param T to make non nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type NonNullable<T extends any[], K extends string = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONonNullable<T, K, depth>, any[]>
    0: TupleOf<ONonNullable<T, K, depth>>
}[Equals<K, keyof T>]
