import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {TupleOf} from '../Object/TupleOf'
import {Equals} from '../Any/Equals'
import {Cast} from '../Any/Cast'

/** Make some entries of **`T`** nullable (deeply or not)
 * @param T to make nullable
 * @param K to choose entries (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<T extends any[], K extends string = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<T, K, depth>, any[]>
    0: TupleOf<ONullable<T, K, depth>>
}[Equals<K, keyof T>]
