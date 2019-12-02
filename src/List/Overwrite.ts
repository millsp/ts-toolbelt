import {Overwrite as OOverwrite} from '../Object/Overwrite'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Update the entries of **`T`** with the ones of **`T1`**
 * @param T to update
 * @param T1 to update with
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Overwrite<T extends List, T1 extends object> =
    Cast<OOverwrite<T, T1>, List>
