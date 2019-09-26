import {Index} from '../Any/Index'
import {Keys as UKeys} from '../Union/Keys'

/** Get the keys of an **`object`**
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type Keys<O extends object> =
    (UKeys<O> | keyof O) & Index
    // Prevents `undefined` to appear in the keys
    // `| keyof O` fixes #50, broken by distribution
