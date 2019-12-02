import {Omit} from '../Object/Omit'
import {Merge as OMerge} from '../Object/Merge'
import {At} from '../Object/At'
import {Depth} from '../Object/_Internal'
import {ObjectOf} from './ObjectOf'
import {ListOf} from '../Object/ListOf'
import {Length} from './Length'
import {Kind} from '../Any/Kind'
import {List} from './List'

/**
 * @hidden
 */
type MergeFlat<T extends List, T1 extends List> =
    number extends Length<T | T1>
    // if we can't know the size, then get closest type
    ? (T | T1) extends (infer T)[] ? T[] : never
    // if it's a tuple then we proceed with the merging
    : ListOf<OMerge<ObjectOf<T>, Omit<ObjectOf<T1>, keyof T>>>

/**
 * @hidden
 */
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
export type Merge<T extends List, T1 extends List, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<T, T1>
    'deep': MergeDeep<T, T1>
}[depth]
