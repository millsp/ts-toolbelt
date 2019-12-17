import {Index} from '../Any/Index'
import {Boolean, True} from '../Boolean/Boolean'

type AtStrict<O extends object, K extends Index> =
    K extends keyof O
    ? O[K]
    : never

type AtLoose<O extends object, K extends Index> =
    O[K & keyof O]

/** Get in **`O`** the type of a field of key **`K`**
 * @param O to extract from
 * @param K **`keyof`** to extract at
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
export type At<O extends object, K extends Index, strict extends Boolean = True> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
}[strict]
