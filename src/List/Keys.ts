import {Index} from '../Any/Index'
import {Exclude} from '../Union/Exclude'
import {List} from './List'

/** Get the keys of a [[List]]
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<T extends List> =
    Exclude<keyof T, keyof any[]> & Index | number
    // We re-include `number`, it is a "own key"
    // `| keyof O` fixes #50, broken by distribution
