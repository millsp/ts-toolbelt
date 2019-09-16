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

type MergeProp<O extends object, O1 extends object, K extends Index> =
    K extends keyof O
    ? O[K]
    : K extends keyof O1
      ? O1[K]
      : never

type MergeFlat<T extends any[], T1 extends any[]> =
    TupleOf<_MergeFlat<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>>>
    // We need to exclude `O` out of `O1` to preserve modifiers
    // because doing `keyof (O & O1O)` mixes the modifiers up

type _MergeFlat<O extends object, O1P extends object> = {
    [K in keyof (O & O1P)]: MergeProp<O, O1P, K>
    // for each property, pick what's available in `O` or `O1`
    // at this stage `O1P` is just a part of the original `O1`
}

type MergeDeep<T extends any[], T1 extends any[]> =
    TupleOf<Compute<_MergeDeep<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>, ObjectOf<T1>>>>
    // same principle as above, but with a little tweak
    // we keep the original `O1` to know if we can merge
    // => if `O` and `O1` have `object` fields of same name
    // => then it means that both fields can be merged deeply
    // => and this is the meaning of what is programmed below

type _MergeDeep<O extends object, O1P extends object, O1 extends object> = {
    [K in keyof (O & O1P)]: And<Extends<At<O, K>, any[]>, Extends<At<O1, K>, any[]>> extends True
                            ? MergeDeep<At<O, K> & [], At<O1, K> & []>
                            : MergeProp<O, O1, K>
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
