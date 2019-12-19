import {Index} from '../Any/Index'
import {Exclude} from '../Union/Exclude'
import {List} from './List'

/** Get the keys of a [[List]]
 * @param L
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<L extends List> =
    Exclude<keyof L, keyof any[]> & Index | number
    // We re-include `number`, it is a "own key"
    // `| keyof O` fixes #50, broken by distribution
