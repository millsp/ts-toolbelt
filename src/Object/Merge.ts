import {Omit} from './Omit'
import {At} from './At'
import {Compute} from '../Any/Compute'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {Keys} from './Keys'

/**
 * @hidden
 */
export type MergeFlat<O extends object, O1 extends object> =
    Compute<O & Omit<O1, Keys<O>>>

/**
 * @hidden
 */
export type MergeDeep<O, O1> =
    (Kind<(O | O1)> extends 'object'
    ? MergeFlat<O & {}, O1 & {}> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<O1 & {}, K>>} & {}
      : never
    : O)

// If we wanted to dive in the tuples as well
// Kind<(O | O1)> extends 'array'
// ? TMerge<Cast<O, List>, Cast<O1, List>> extends infer M
//   ? {[K in keyof M]: MergeDeep<M[K], At<O1 & {}, K>>}
//   : never // this is a trick to force ts to do it deeply
// : O       // in versions <= 3.8 no-recursive-conditional

/** Complete the fields of **`O`** with the ones of **`O1`**
 * ('deep' option will skip nullable objects to be merged).
 * For more advanced capabilities, see [[MergeUp]].
 * @param O to complete
 * @param O1 to copy from
 * @param (?=`'flat'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<O, O1>
    'deep': MergeDeep<O, O1>
}[depth]
