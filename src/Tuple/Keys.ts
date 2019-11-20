import {Index} from '../Any/Index'
import {Exclude} from '../Union/Exclude'
import {Tuple} from './Tuple'

/** Get the keys of a [[Tuple]]
 * @param T
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<T extends Tuple> =
    Exclude<keyof T, keyof any[]> & Index | number
    // We re-include `number`, it is a "own key"
    // `| keyof O` fixes #50, broken by distribution
