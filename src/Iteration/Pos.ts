import {Iteration} from './_Iteration'
import {Format, FormatMap} from './_Internal'

/** Get the position of **`I`** (**number**)
 * @param I to query
 * @returns **`number`**
 * @example
 * ```ts
 * import {I} from 'ts-toolbelt'
 *
 * type i = I.IterationOf<'20'>
 *
 * type test0 = I.Pos<i>         // 20
 * type test1 = I.Pos<I.Next<i>> // 21
 * ```
 */
export type Pos<I extends Iteration> =
    I[FormatMap['n']] // iteration position
