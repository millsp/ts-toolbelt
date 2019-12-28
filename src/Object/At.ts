import {Key} from '../Any/Key'
import {Boolean} from '../Boolean/Boolean'
import {Equals} from '../Any/Equals'
import {Extends} from '../Any/Extends'

/**
 * @hidden
 */
type AtStrict<O extends object, K extends Key> =
    K extends keyof O
    ? O[K]
    : never

/**
 * @hidden
 */
type AtLoose<O extends object, K extends Key> =
    Equals<K, any> extends 1
    ? O[never]
    : O extends unknown
      ? Extends<K & keyof O, keyof O> extends 1
        ? O[K & keyof O]
        : never
      : never

/** Get in **`O`** the type of a field of key **`K`**
 * @param O to extract from
 * @param K [[Key]] to extract at
 * @param strict (?=`0`) `1` will male it act like `keyof`
 * @returns **`any`**
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt'
 *
 * type User = {
 *     info: {
 *         name: string
 *         age: number
 *         payment: {}
 *     }
 *     id: number
 * }
 *
 * type test0 = O.At<User, 'id'> // number
 * ```
 */
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
}[strict]
