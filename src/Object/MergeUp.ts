import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {Merge} from './Merge'
import {Overwrite} from './Overwrite'
import {Unionize} from './Unionize'
import {Compulsory} from './Compulsory'
import {NullableKeys} from './NullableKeys'

type _MergeUpFlat<O extends object, O1 extends object, OR = Compulsory<O & {}>, O1R = Compulsory<O1 & {}>> =
    Overwrite<O & O1, Merge<OR & {}, O1R & {}>>
    // this merges `O` and `O1` which are made `Compulsory`
    // ^^^ it enables deep diving and merging (MergeUpDeep)

type MergeUpFlat<O extends object, O1 extends object> =
    Unionize<_MergeUpFlat<O, O1>, O1, NullableKeys<O>>
    // puts `O` and `O1` in the same object, unionized
    // only keys that can be overwritten are unionized

type MergeUpDeep<O, O1> =
    Kind<(O | O1)> extends 'object'
    ? _MergeUpFlat<O & {}, O1 & {}> extends infer M
      ? {[K in keyof M]: MergeUpDeep<M[K], At<O1 & {}, K>>}
      : never
    : O | O1 // <-- this is what happens if we can't dive

/** Complete the fields of **`O`** with the ones of **`O1`**.
 * This is a version of `Merge` that handles optional fields. It understands
 * that merged optional fields are no longer optional (have been completed).
 * @param O to complete
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type MergeUp<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeUpFlat<O, O1>
    'deep': MergeUpDeep<O, O1>
}[depth]
