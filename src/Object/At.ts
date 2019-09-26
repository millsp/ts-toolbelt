import {Index} from '../Any/Index'

/** Get in **`O`** the type of a field of key **`K`**
 * @param O to extract from
 * @param K **`keyof`** to extract at
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
export type At<O extends object, K extends Index> =
    K extends keyof O
    ? O[K]
    : never
