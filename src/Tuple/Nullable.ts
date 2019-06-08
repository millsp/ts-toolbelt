import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {TupleOf} from '../Object/TupleOf'
import {Equals} from '../Any/Equals'
import {Length} from './Length'
import {List} from '../_Internal'
import {Cast} from '../Any/Cast'

/** Make some entries of **`T`** nullable (deeply or not)
 * @param T to make nullable
 * @param K to choose entries (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export type Nullable<T extends List, K extends string = keyof T, depth extends Depth = 'flat'> =
    Equals<K, keyof T> extends true
    ? Cast<ONullable<T, K, depth>, List>
    : TupleOf<ONullable<T, K, depth>, Length<T, 's', 'max'>>
