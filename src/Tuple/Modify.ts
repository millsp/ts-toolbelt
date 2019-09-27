import {At} from './At'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {Exclude} from '../Union/Exclude'
import {Tuple} from './Tuple'

/** Modify **`T`** with **`TMod`** & the **`x`** placeholder
 * @param T to copy from
 * @param TMod to copy to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Modify<T extends Tuple, TMod extends Tuple> = {
    [K in keyof TMod]: Replace<TMod[K], x, Exclude<At<T, K>, undefined>>
} & {}
