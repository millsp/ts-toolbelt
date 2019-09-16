import {Unionize} from '../Object/Unionize'

/** Make the fields of **`T`** union the ones of **`T1`**
 * @param T to union from
 * @param T1 to union with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<T extends object, T1 extends object> =
    Unionize<T, T1>
