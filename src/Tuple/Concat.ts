import {Reverse} from './Reverse'

/** Attach **`T1`** at the end of **`T`**
 * @param T to concat with
 * @param T1 to be attached
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Concat<T extends any[], T1 extends any[]> =
    Reverse<Reverse<T>, T1>
