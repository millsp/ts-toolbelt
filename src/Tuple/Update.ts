import {Update as OUpdate} from '../Object/Update'
import {Cast} from '../Any/Cast'
import {Index} from '../Any/Index'
import {Tuple} from './Tuple'

/** Update in **`T`** the entries of key **`K`** with **`A`**.
 * Use the **`x`** placeholder to get the current field type.
 * @param T to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Update<T extends Tuple, K extends Index, A extends any> =
    Cast<OUpdate<T, K, A>, Tuple>
