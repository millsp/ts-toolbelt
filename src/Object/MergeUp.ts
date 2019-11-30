import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {OptionalKeys} from './OptionalKeys'
import {Index} from '../Any/Index'
import {Optional} from './Optional'
import {NonNullable} from '../Union/NonNullable'
import {Tuple} from '../Tuple/Tuple'
import {And} from '../Boolean/And'
import {Extends} from '../Any/Extends'
import {True, Boolean, False} from '../Boolean/Boolean'
import {Or} from '../Boolean/Or'

/**
 * @hidden
 */
type MergeUpProp<O extends object, O1 extends object, K extends Index, IsOptional extends Boolean> =
    IsOptional extends True             // If `K` is marked as optional
    ? NonNullable<At<O, K>> | At<O1, K> // complete `O[K]` with `O1[K]`
    : [At<O, K>] extends [never]        // or patch `O[K]` with `O1[K]`
      ? At<O1, K>                       // can patch with `O1[K]`
      : At<O, K>                        // cannot patch, keep it

/**
 * @hidden
 */
type _MergeUpFlat<O extends object, O1 extends object, OOK extends Index = OptionalKeys<O>> = {
    [K in keyof (O & O1)]: MergeUpProp<O, O1, K, Extends<K, OOK>>
} & {}

/**
 * @hidden
 */
type MergeUpFlat<O extends object, O1 extends object> =
O extends unknown ? O1 extends unknown ?
    _MergeUpFlat<((O | O1) extends Tuple ? Optional<O, keyof any[]> : O), O1>
    // between parenthesis helps with edge-case of tuple/array merging
    // because even if merge is successful, its length stays incorrect
    // so this only applies if both of them are `Array` kinds `(O | O1)`
: never : never

/**
 * @hidden
 */
type _MergeUpDeep<O extends object, O1 extends object, IsParentOptional extends Boolean = 0> = {
    [K in keyof (O & O1)]:  And< // we first make sure that both are objects
                                Extends<Kind<NonNullable<At<O, K>>>, 'object'>,
                                Extends<Kind<NonNullable<At<O1, K>>>, 'object'>
                            > extends True
                            ? _MergeUpDeep< // if it is the case, recurse deeper
                                At<O,  K> & {}, // merge O[K]
                                At<O1, K> & {}, // with O1[K]
                                // mark the descendants as children of an optional
                                K extends True ? K : K extends OptionalKeys<O> ? True : False
                            >
                            : MergeUpProp< // otherwise, we treat them as fields
                                O, O1, K,
                                Or< // if parent, or the field `K` are optional
                                    IsParentOptional,
                                    Extends<K, OptionalKeys<O>>
                                >
                            >
}

/**
 * @hidden
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
 * import {O} from 'ts-toolbelt'
 *
 * type O = {
 *     name?: string
 *     age? : number
 *     zip? : string
 *     pay  : {
 *         cvv?: number
 *     }
 * }
 *
 * type O1 = {
 *     age : number
 *     zip?: number
 *     city: string
 *     pay : {
 *         cvv : number
 *         ccn?: string
 *     }
 * }
 *
 * type test = O.MergeUp<O, O1, 'deep'>
 * // {
 * //     name?: string | undefined;
 * //     age: number;
 * //     zip?: string | number;
 * //     pay: {
 * //         cvv: number;
 * //         ccn?: string | undefined;
 * //     };
 * //     city: string;
 * // }
 * ```
 */
export type MergeUp<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeUpFlat<O, O1>
    'deep': MergeUpDeep<O, O1>
}[depth]
