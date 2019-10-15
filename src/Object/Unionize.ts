import {At} from './At'
import {Index} from '../Any/Index'

/** Make the fields of **`O`** union the ones of **`O1`**
 * @param O to union from
 * @param O1 to union with
 * @param K to chose fields (?=`keyof O`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<O extends object, O1 extends object, K extends Index = keyof O> = {
    [P in keyof O]: P extends K ? O[P] | At<O1, P> : O[P]
} & {}
