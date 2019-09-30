import {Omit} from '../Object/Omit'
import {Merge as OMerge} from '../Object/Merge'
import {At} from '../Object/At'
import {Depth} from '../Object/_Internal'
import {ObjectOf} from './ObjectOf'
import {TupleOf} from '../Object/TupleOf'
import {Length} from './Length'
import {Kind} from '../Any/Kind'
import {Tuple} from './Tuple'

type MergeFlat<T extends Tuple, T1 extends Tuple> =
T extends unknown ? T1 extends unknown ? (
    number extends Length<T | T1>
    // if we can't know the size, then get closest type
    ? (T | T1) extends (infer T)[] ? T[] : never
    // if it's a tuple then we proceed with the merging
    : TupleOf<OMerge<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>>>
) : never : never

type MergeDeep<O, O1> = // we do not distribute this one => recursive distributed above
    Kind<(O | O1)> extends 'array'
    ? MergeFlat<O & [], O1 & []> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<O1 & [], K>>} & {}
      : never
    : O

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
export type Merge<T extends Tuple, T1 extends Tuple, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<T, T1>
    'deep': MergeDeep<T, T1>
}[depth]
