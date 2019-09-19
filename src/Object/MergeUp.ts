import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {Pick} from './Pick'
import {Compute} from '../Any/Compute'
import {Overwrite} from './Overwrite'
import {Compulsory} from './Compulsory'
import {SelectKeys} from './SelectKeys'
import {Merge as UMerge} from '../Union/Merge'
import {Merge} from './Merge'
import {OptionalKeys} from './OptionalKeys'
import {And} from '../Boolean/And'
import {Extends} from '../Any/Extends'
import {True} from '../Boolean/Boolean'

type MergeUpFlat<O extends object, O1 extends object> =
    Merge<UMerge<O | Pick<O1, OptionalKeys<O>>>, O1>

type MergeUpDeep<O, O1> =
    // we'll dive within objects even if they're optional or have been marked as nullable
    And<Extends<Kind<NonNullable<O>>, 'object'>, Extends<Kind<NonNullable<O1>>, 'object'>> extends True
    ? MergeUpFlat<
        // here we make the object fields non-nullable so that we can dive deeply in them
        Compulsory<O  & {}, SelectKeys<O  & {}, object | undefined | null, 'implements->'>>,
        Compulsory<O1 & {}, SelectKeys<O1 & {}, object | undefined | null, 'implements->'>>
      > extends infer M
        // and here we merge deeply, then restore with `Overwrite` what we just did above
      ? Compute<Overwrite<
            // if `O1` isn't optional, we overwrite `O & O1`, otherwise we do it with `O`
            UMerge<(O | O1) & {}> | (undefined extends O1 ? O & {} : never),
            {[K in keyof M]: MergeUpDeep<M[K], At<O1 & {}, K>>} // we do the deep merging
        >>
      : never
    : O

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
