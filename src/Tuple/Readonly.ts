import {Depth} from '../Object/_Internal'
import {Readonly as OReadonly} from '../Object/Readonly'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'

/** Make **`T`** readonly (deeply or not)
 * @param T to make readonly
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Readonly<T extends Tuple, depth extends Depth = 'flat'> =
    Cast<OReadonly<T, keyof T, depth>, ReadonlyArray<any>>
