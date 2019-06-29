import {Iteration} from './_Iteration'
import {Format, FormatMap} from './_Internal'

/** Is **`Key`** and **`Pos`** in a single type
 * @param I to query
 * @param fmt output
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * import {I} from 'ts-toolbelt'
 *
 * /// Let's make '20' an iteration
 * type i = I.IterationOf<'20'> // [...]

 * type fmtS = I.Fmt<i, 's'> // '20'
 * type fmtN = I.Fmt<i, 'n'> //  20
 * ```
 */
export type Fmt<I extends Iteration, fmt extends Format> =
    I[FormatMap[fmt]]
