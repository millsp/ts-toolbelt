import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {OptionalKeys} from './OptionalKeys'
import {Index} from '../Any/Index'
import {Optional} from './Optional'
import {NullableKeys} from './NullableKeys'
import {Select} from '../Union/Select'
import {NonNullable} from '../Union/NonNullable'
import {Tuple} from '../Tuple/Tuple'

type MergeUpProp<O extends object, O1 extends object, K extends Index, OOK extends Index> =
    K extends OOK                                       // if K is a `OptionalKey` of `O`
    ? NonNullable<At<O, K>> | At<O1, K>                 // complete `O[K]` with `O1[K]`
    : [At<O, K>] extends [never] ? At<O1, K> : At<O, K> // or patch `O[K]` with `O1[K]`

type MergeUpFlat<O extends object, O1 extends object> =
O extends object ? O1 extends object ? ({ // forces distribution
    [K in keyof (O & O1)]: MergeUpProp<O, O1, K, OptionalKeys<O>>
} & {}) : never : never

type MergeUpDeep<O extends object, O1 extends object, OOK extends Index = OptionalKeys<O>, NOK extends Index = NullableKeys<O>, NO1K extends Index = NullableKeys<O1>> =
O extends object ? O1 extends object ? ({
    [K in keyof (O & O1)]:  Kind<NonNullable<At<O, K> & At<O1, K>>> extends 'object'
                            ? MergeUpDeep< // the above makes sure it's only objects
                            // then if parent is `Nullable`, make children optional
                            K extends NOK  ? Optional<NonNullable<At<O, K>> & {}>  : At<O, K> & {},
                            K extends NO1K ? Optional<NonNullable<At<O1, K>> & {}> : At<O1, K> & {}
                            // and if not optional, we re-add eventual `undefined | null`
                            > | (K extends OOK ? never : Select<At<O, K>, undefined | null>)
                            : MergeUpProp<O, O1, K, OOK>
} & {}) : never : never

/** Accurately complete the fields of **`O`** with the ones of **`O1`**.
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
    'flat': MergeUpFlat<(O extends Tuple ? Optional<O, keyof any[]> : O), O1>
    'deep': MergeUpDeep<(O extends Tuple ? Optional<O, keyof any[]> : O), O1>
    // between parenthesis helps with edge-case of tuple/array merging
    // because even if merge is successful, length stays incorrect
}[depth]
