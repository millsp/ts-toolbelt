import {At} from './At'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {Exclude} from '../Union/Exclude'

/** Modify **`T`** with **`TMod`** & the **`x`** placeholder
 * @param T to copy from
 * @param TMod to copy to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Modify<T extends any[], TMod extends any[]> = {
    [K in keyof TMod]: Replace<TMod[K], x, Exclude<At<T, K>, undefined>>
}
