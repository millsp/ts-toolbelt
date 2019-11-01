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
import {And} from '../Boolean/And'
import {Extends} from '../Any/Extends'

/**
 * @internal
 */
type MergeUpProp<O extends object, O1 extends object, K extends Index, OOK extends Index> =
    K extends OOK                       // if K is a `OptionalKey` of `O`
    ? NonNullable<At<O, K>> | At<O1, K> // complete `O[K]` with `O1[K]`
    : [At<O, K>] extends [never]        // or patch `O[K]` with `O1[K]`
      ? At<O1, K>
      : At<O, K>

/**
 * @internal
 */
type _MergeUpFlat<O extends object, O1 extends object, OOK extends Index = OptionalKeys<O>> = {
    [K in keyof (O & O1)]: MergeUpProp<O, O1, K, OOK>
} & {}

/**
 * @internal
 */
type MergeUpFlat<O extends object, O1 extends object> =
O extends unknown ? O1 extends unknown ?
    _MergeUpFlat<((O | O1) extends Tuple ? Optional<O, keyof any[]> : O), O1>
    // between parenthesis helps with edge-case of tuple/array merging
    // because even if merge is successful, its length stays incorrect
    // so this only applies if both of them are `Array` kinds `(O | O1)`
: never : never

/**
 * @internal
 */
type _MergeUpDeep<O extends object, O1 extends object, OOK extends Index = OptionalKeys<O>, NOK extends Index = NullableKeys<O>> = {
    [K in keyof (O & O1)]:  And<Extends<Kind<NonNullable<At<O, K>>>, 'object'>, Extends<Kind<NonNullable<At<O1, K>>>, 'object'>> extends 1
                            ? MergeUpDeep< // the above makes sure it's only objects
                            // then if parent is `Nullable`, makes children optional
                            K extends NOK ? Optional<NonNullable<At<O, K>> & {}> : At<O, K> & {},
                            At<O1, K> & {} // merge with whatever sits on at `O1[K]`
                            // and if not optional, we re-add eventual `undefined | null`
                            > | (K extends OOK ? never : Select<At<O, K>, undefined | null>)
                            : MergeUpProp<O, O1, K, OOK>
} & {}

/**
 * @internal
 */
type MergeUpDeep<O extends object, O1 extends object> =
O extends unknown ? O1 extends unknown ?
    _MergeUpDeep<((O | O1) extends Tuple ? Optional<O, keyof any[]> : O), O1>
    // between parenthesis helps with edge-case of tuple/array merging
    // because even if merge is successful, its length stays incorrect
    // so this only applies if both of them are `Array` kinds `(O | O1)`
: never : never

/** Accurately complete the fields of **`O`** with the ones of **`O1`**.
 * This is a version of `Merge` that handles optional fields. It understands
 * that merged optional fields are no longer optional (have been completed).
 * It is able to deal with the merging of **`Union`s** of **`object`**s.
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
