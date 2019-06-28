import {Last} from './Last'
import {Prepend} from '../Tuple/Prepend'
import {Exclude} from './Exclude'

type _TupleOf<U, TN extends any[] = [], LastU = Last<U>> = {
    0: _TupleOf<Exclude<U, LastU>, Prepend<TN, LastU>>
    1: TN
}[
    [U] extends [never]
    ? 1
    : 0
]

/** Transform a **union** into a **tuple**
 * (⚠️ it might not preserve order)
 * @param U to transform
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type TupleOf<U extends any> =
    _TupleOf<U> extends infer X
    ? X
    : never
