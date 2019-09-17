import {Omit} from './Omit'
import {At} from './At'
import {Compute} from '../Any/Compute'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'

type MergeFlat<O extends object, O1 extends object> =
    Compute<O & Omit<O1, keyof O>>

type MergeDeep<O, O1> =
    Kind<(O | O1)> extends 'object'
    ? MergeFlat<O & {}, O1 & {}> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<O1 & {}, K>>}
      : never
    : O

// If we wanted to dive in the tuples as well
// Kind<(O | O1)> extends 'array'
// ? TMerge<Cast<O, any[]>, Cast<O1, any[]>> extends infer M
//   ? {[K in keyof M]: MergeDeep<M[K], At<O1 & {}, K>>}
//   : never // this is a trick to force ts to do it deeply
// : O       // in versions <= 3.7 no-recursive-conditional

/** Complete the fields of **`O`** with the ones of **`O1`**
 * ('deep' option will skip any nullable object to be merged)
 * (only pure)
 * @param O to complete
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<O, O1>
    'deep': MergeDeep<O, O1>
}[depth]
