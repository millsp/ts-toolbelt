import {IterationOf, IterationMap} from '../Iteration/IterationOf'
import {Pos} from '../Iteration/Pos'

/** Transform a **`string`** into a **`number`**
 * @param S to transform
 * @returns **`number`**
 * @example
 */
export type NumberOf<N extends string> =
    Pos<IterationOf<N>>
