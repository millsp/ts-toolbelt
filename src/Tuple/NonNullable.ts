import {Depth} from '../Object/_Internal'
import {NonNullable as ONonNullable} from '../Object/NonNullable'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'
import {Equals} from '../Any/Equals'
import {List} from '../_Internal'
import {Cast} from '../Any/Cast'

/** Make some entries of **`T`** not nullable (deeply or not)
 * @param T to make non nullable
 * @param K to choose fields (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`List`**
 * @example
 */
export type NonNullable<T extends List, K extends string = keyof T, depth extends Depth = 'flat'> =
    Equals<K, keyof T> extends true
    ? Cast<ONonNullable<T, K, depth>, List>
    : TupleOf<ONonNullable<T, K, depth>, Length<T, 's', 'max'>>
