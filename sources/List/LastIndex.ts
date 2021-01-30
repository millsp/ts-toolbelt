import {Length} from './Length'
import {Tail} from './Tail'
import {List} from './List'

/**
 * Get the last index of `L`
 * @param L to get from
 * @returns [[String]] or `number`
 * @example
 * ```ts
 * ```
 */
export type LastIndex<L extends List> =
    Length<Tail<L>>
