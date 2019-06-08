import {At as OAt} from '../Object/At'
import {List} from '../_Internal'

/** Get in **`T`** the type of an entry of key **`K`**
 * @param T to extract from
 * @param K to extract at
 * @returns **`any`**
 * @example
 * @internal
 */
export type At<T extends List, K extends string> =
    OAt<T, K>
