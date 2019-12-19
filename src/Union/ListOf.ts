import {Last} from './Last'
import {Prepend} from '../List/Prepend'
import {Exclude} from './Exclude'
import {List} from '../List/List'

/**
 * @hidden
 */
type _ListOf<U, LN extends List = [], LastU = Last<U>> = {
    0: _ListOf<Exclude<U, LastU>, Prepend<LN, LastU>>
    1: LN
}[
    [U] extends [never]
    ? 1
    : 0
]

/** Transform a [[Union]] into a [[List]]
 * (⚠️ it might not preserve order)
 * @param U to transform
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type ListOf<U extends any> =
    _ListOf<U> extends infer X
    ? X
    : never
