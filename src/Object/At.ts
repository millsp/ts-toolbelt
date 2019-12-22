import {Key} from '../Any/Key'
import {Boolean, True} from '../Boolean/Boolean'
import {Equals} from '../Any/Equals'

type AtStrict<O extends object, K extends Key> =
    K extends keyof O
    ? O[K]
    : never

type AtLoose<O extends object, K extends Key> =
    Equals<K, any> extends 1
    ? O extends unknown
      ? O[keyof O]
      : never
    : O extends unknown
      ? Equals<K & keyof O, never> extends 1
        ? never
        : O[K & keyof O]
      : never

/** Get in **`O`** the type of a field of key **`K`**
 * @param O to extract from
 * @param K [[Key]] to extract at
 * @param strict (?=`True`) `False` enables using keys `string | number | symbol`
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
export type At<O extends object, K extends Key, strict extends Boolean = True> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
}[0]
