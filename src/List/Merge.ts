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
type MergeFlatTuple<L extends List, L1 extends List> = ListOf<ObjectOf<{
    [K in keyof (L & L1)]: [At<L, K>] extends [never]
                           ? At<L1, K>
                           : At<L, K>
}>>

/**
 * @hidden
 */
type MergeFlatArray<L extends List, L1 extends List> =
    (L | L1) extends (infer L)[]
    ? L[]
    : never

/**
 * @hidden
 */
export type MergeFlat<L extends List, L1 extends List> =
    number extends Length<L | L1>
    // if we can't know the size, then get closest type
    ? MergeFlatArray<L, L1>
    // if it's a tuple then we proceed with the merging
    : MergeFlatTuple<L, L1>

/**
 * @hidden
 */
export type MergeDeep<O, O1> =
    Kind<(O | O1)> extends 'array'
    ? MergeFlat<O & [], O1 & []> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<O1 & [], K>>} & {}
      : never
    : O

/** Complete the fields of **`O`** with the ones of **`O1`**
 * ('deep' option will skip any nullable object to be merged)
 * @param O to complete
 * @param O1 to copy from
 * @param depth (?=`'flat'`) to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Merge<L extends List, L1 extends List, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<L, L1>
    'deep': MergeDeep<L, L1>
}[depth]
