import {At} from './At'
import {Depth} from './_Internal'
import {Kind} from '../Any/Kind'
import {OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {NonNullable} from '../Union/NonNullable'
import {And} from '../Boolean/And'
import {Extends} from '../Any/Extends'
import {Boolean} from '../Boolean/Boolean'
import {Or} from '../Boolean/Or'

/**
 * @hidden
 */
type MergeUpProp<O extends object, O1 extends object, K extends Key, IsOptional extends Boolean> =
    IsOptional extends 1                // If `K` is marked as optional
    ? NonNullable<At<O, K>> | At<O1, K> // complete `O[K]` with `O1[K]`
    : [At<O, K>] extends [never]        // or patch `O[K]` with `O1[K]`
      ? At<O1, K>                       // can patch with `O1[K]`
      : At<O, K>                        // cannot patch, keep it

/**
 * @hidden
 */
type _MergeUpFlat<O extends object, O1 extends object, OOK extends Key = OptionalKeys<O>> = {
    [K in keyof (O & O1)]: MergeUpProp<O, O1, K, Extends<K, OOK>>
} & {}

/**
 * @hidden
 */
export type MergeUpFlat<O extends object, O1 extends object> =
    O extends unknown       // we distribute because
    ? O1 extends unknown    // doing `O & O1` breaks
      ? _MergeUpFlat<O, O1> // the mapped type distrib
      : never
    : never

/**
 * @hidden
 */
type _MergeUpDeep<O extends object, O1 extends object, IsParentOptional extends Boolean = 0> = {
    [K in keyof (O & O1)]:  And< // we first make sure that both are objects
                                Extends<Kind<NonNullable<At<O,  K>>>, 'object'>,
                                Extends<Kind<NonNullable<At<O1, K>>>, 'object'>
                            > extends 1
                            ? _MergeUpDeep< // if it is the case, recurse deeper
                                At<O,  K> & {}, // merge O[K]
                                At<O1, K> & {}, // with O1[K]
                                // mark the descendants as children of an optional
                                K extends 1 ? K : K extends OptionalKeys<O> ? 1 : 0
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
export type MergeUpDeep<O extends object, O1 extends object> =
    O extends unknown
    ? O1 extends unknown
      ? _MergeUpDeep<O, O1>
      : never
    : never

/** Accurately complete the fields of **`O`** with the ones of **`O1`**.
 * This is a version of `Merge` that handles optional fields. It understands
 * that merged optional fields are no longer optional (have been completed).
 * It is able to deal with the merging of **`Union`s** of **`object`**s.
 * @param O to complete
 * @param O1 to copy from
 * @param (?=`'flat'`) depth to do it deeply
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
