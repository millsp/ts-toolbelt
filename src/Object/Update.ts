import {Index} from '../Any/Index'
import {x} from '../Any/x'
import {Replace} from '../Union/Replace'
import {Merge} from './Merge'
import {Exclude} from '../Union/_api'

/** Update in **`O`** the fields of key **`K`** with **`A`**.
 * Use the [[x]] placeholder to get the current field type.
 * @param O to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`object`**
 * @example
 * ```ts
 * import {A, O} from 'ts-toolbelt'
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
 * type test0 = Update<User, 'id' | 'info', A.x | null>
 * // {
 * //     info: {
 * //         name: string;
 * //         age: number;
 * //         payment: {};
 * //     } | null;
 * //     id: number | null;
 * // }
 * ```
 */
export type Update<O extends object, K extends Index, A extends any> =
    Merge<Record<Exclude<K, keyof O>, Exclude<A, x>>, { // add eventual missing keys
        [P in keyof O]: P extends K                     // proceed with the known keys
                        ? Replace<A, x, O[P]>
                        : O[P]
    } & {}>
