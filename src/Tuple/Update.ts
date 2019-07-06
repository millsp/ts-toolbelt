import {Update as OUpdate} from '../Object/Update'
import {Cast} from '../Any/Cast'
import {Index} from '../_Internal'

/** Update in **`T`** the entries of key **`K`** with **`A`**
 * @param T to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Update<O extends object, K extends Index, A extends any> =
    Cast<OUpdate<O, K, A>, any[]>
