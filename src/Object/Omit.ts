import {Pick} from './Pick'
import {Exclude} from '../Union/Exclude'
import {Cast} from '../Any/Cast'

/** Remove out of **`O`** the fields of key **`K`**
 * @param O to remove from
 * @param K to chose fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Omit<O extends object, K extends string> =
    Pick<O, Exclude<keyof O, K>> extends infer X
    ? Cast<X, object>
    : never

