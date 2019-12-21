import {Pick} from './Pick'
import {Exclude} from '../Union/Exclude'
import {Key} from '../Any/Key'
import {Keys} from './Keys'

/** Remove out of **`O`** the fields of key **`K`**
 * @param O to remove from
 * @param K to chose fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Omit<O extends object, K extends Key> =
    Pick<O, Exclude<Keys<O>, K>>
