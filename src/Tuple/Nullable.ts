import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {TupleOf} from '../Object/TupleOf'
import {Equals} from '../Any/Equals'
import {Length} from './Length'
import {Cast} from '../Any/Cast'
import {Overwrite} from './Overwrite'

/** Make some entries of **`T`** nullable (deeply or not)
 * @param T to make nullable
 * @param K to choose entries (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 */
export type Nullable<T extends any[], K extends string = keyof T, depth extends Depth = 'flat'> =
    Equals<K, keyof T> extends true
    ? Cast<ONullable<T, K, depth>, any[]>
    : Overwrite<T, TupleOf<ONullable<T, K, depth>, Length<T, 's'>>>
