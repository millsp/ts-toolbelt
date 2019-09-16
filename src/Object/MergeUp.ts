import {Omit} from './Omit'
import {Extends} from '../Any/Extends'
import {At} from './At'
import {And} from '../Boolean/And'
import {True} from '../Boolean/Boolean'
import {Compute} from '../Any/Compute'
import {Index} from '../_Internal'
import {Depth} from './_Internal'
import {OptionalKeys} from './OptionalKeys'
import {RequiredKeys} from './RequiredKeys'
import {Intersect} from '../Union/Intersect'
import {Unionize} from './Unionize'
import {Required} from './Required'
import {Merge} from './Merge'

type MergeProp<O extends object, O1P extends object, K extends Index> =
    K extends keyof O
    ? O[K]
    : K extends keyof O1P
      ? O1P[K]
      : never

// this makes a Unionized object of `O` & `O1` for the fields
// that Optional in `O` and at the same time Required in `O1`
type UnionizeRequired<O extends object, O1 extends object> =
    // we collect the keys of `O` that can be completed by `O1`
    Intersect<OptionalKeys<O>, RequiredKeys<O1>> extends infer K
    // now this this a part of `O` that's completed with `O1`
    ? Required<Unionize<O, O1, K & Index>, K & Index>
    : never

// this makes a Unionized object of `O` & `O1` for the fields
// that Optional in both of them
type UnionizeOptional<O extends object, O1 extends object> =
    // we collect the keys of `O` that can be completed by `O1`
    Intersect<OptionalKeys<O>, OptionalKeys<O1>> extends infer K
    // now this this a part of `O` that's completed with `O1`
    ? Unionize<O, O1, K & Index>
    : never

type UnionizeMerge<O extends object, O1 extends object> =
    // here is a Merge of the two operations right above
    Merge<UnionizeOptional<O, O1>, UnionizeRequired<O, O1>>

type MergeUpFlat<O extends object, O1 extends object> =
    // we override `O` with the computation of `UnionizeMerge`
    // that brings the first step of merging, that is the unions
    _MergeUpFlat<Merge<UnionizeMerge<O, O1>, O>, Omit<O1, keyof O>>
    // We need to exclude `O` out of `O1` to preserve modifiers
    // because doing `keyof (O & O1P)` mixes the modifiers up

type _MergeUpFlat<O extends object, O1P extends object> = {
    [K in keyof (O & O1P)]: MergeProp<O, O1P, K>
    // for each property, pick what's available in `O` or `O1`
    // at this stage `O1P` is just a part of the original `O1`
    // => it's the part of `O1` that does not overlap with `O`
}

type MergeUpDeep<O extends object, O1 extends object> =
    Compute<_MergeUpDeep<Merge<UnionizeMerge<O, O1>, O>, Omit<O1, keyof O>, O1>>
    // same principle as above, but with a little tweak
    // we keep the original `O1` to know if we can merge it
    // => if `O` and `O1` have `object` fields of same name
    // => then it means that both fields can be merged deeply
    // => and this is the meaning of what is programmed below

type _MergeUpDeep<O extends object, O1P extends object, O1 extends object> = {
    [K in keyof (O & O1P)]: And<Extends<At<O, K>, object>, Extends<At<O1, K>, object>> extends True
                            ? MergeUpDeep<At<O, K> & {}, At<O1, K> & {}>
                            : MergeProp<O, O1, K>
}

/** Complete the fields of **`O`** with the ones of **`O1`**.
 * ('deep' option will skip any nullable object to be merged).
 * Differs from `Merge` as it merges the optional fields of `O` with the fields
 * of `O1` in the form of a **union** (while `Merge` just ignores/discards it).
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
