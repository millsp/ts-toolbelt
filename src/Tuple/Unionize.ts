import {Index} from '../_Internal'
import {At} from './At'
import {Pick} from './Pick'

/** Make the fields of **`T`** union the ones of **`T1`**
 * @param T to union from
 * @param T1 to union with
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<T extends any[], T1 extends any[], K extends Index = keyof T> = Pick<{
    [P in keyof T]: P extends K ? T[P] | At<T1, P> : never
}, K> // Pick makes sure we don't have excess `never`
