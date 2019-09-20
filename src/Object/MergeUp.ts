import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {Pick} from './Pick'
import {Compute} from '../Any/Compute'
import {Overwrite} from './Overwrite'
import {SelectKeys} from './SelectKeys'
import {Merge as UMerge} from '../Union/Merge'
import {Merge} from './Merge'
import {OptionalKeys} from './OptionalKeys'
import {Optional} from './Optional'

type MergeUpFlat<O extends object, O1 extends object> =
    // we do a union merge of optional fields and shared
    Merge<UMerge<O | Pick<O1, OptionalKeys<O>>>, O1>

type MergeUpDeep<O extends object, O1 extends object> = Compute<Overwrite<MergeUpFlat<O, O1>, {
      [K in SelectKeys<O, object>]: Kind<NonNullable<At<O, K> & At<O1, K>>> extends 'object'
                                    ? MergeUpDeep< // the above makes sure it's only objects
                                        K extends OptionalKeys<O> // if O[K] is set optional
                                        ? Optional<At<O, K> & {}> // maker it's children opt
                                        : At<O, K> & {},            // we proceed
                                        NonNullable<At<O1, K>> & {} // w/ merging
                                      >
                                    : At<O, K> // nothing happened
  }
>>

/** Accurately complete the fields of **`O`** with the ones of **`O1`**.
 * This is a version of `Merge` that handles optional fields. It understands
 * that merged optional fields are no longer optional (have been completed).
 * (⚠️ this type is expensive)
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
