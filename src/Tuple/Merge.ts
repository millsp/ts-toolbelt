import {Omit} from '../Object/Omit'
import {Extends} from '../Any/Extends'
import {At} from '../Object/At'
import {And} from '../Boolean/And'
import {True} from '../Boolean/Boolean'
import {Compute} from '../Any/Compute'
import {Index} from '../_Internal'
import {Depth} from '../Object/_Internal'
import {ObjectOf} from './ObjectOf'
import {TupleOf} from '../Object/TupleOf'

// todo One day, make this cleaner with type references

type MergeProp<T extends object, T1P extends object, K extends Index> =
    K extends keyof T
    ? T[K]
    : K extends keyof T1P
      ? T1P[K]
      : never

type MergeFlat<T extends any[], T1 extends any[]> =
    TupleOf<_MergeFlat<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>>>

type _MergeFlat<T extends object, T1P extends object> = {
    [K in keyof (T & T1P)]: MergeProp<T, T1P, K>
}

type MergeDeep<T extends any[], T1 extends any[]> =
    TupleOf<Compute<_MergeDeep<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>, ObjectOf<T1>>>>

type _MergeDeep<T extends object, T1P extends object, T1 extends object> = {
    [K in keyof (T & T1P)]: And<Extends<At<T, K>, any[]>, Extends<At<T1, K>, any[]>> extends True
                            ? MergeDeep<At<T, K> & [], At<T1, K> & []>
                            : MergeProp<T, T1, K>
}

/** Complete the fields of **`O`** with the ones of **`O1`**
 * ('deep' option will skip any nullable object to be merged)
 * @param O to complete
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<T extends any[], T1 extends any[], depth extends Depth = 'flat'> = {
    'flat': MergeFlat<T, T1>
    'deep': MergeDeep<T, T1>
}[depth]
