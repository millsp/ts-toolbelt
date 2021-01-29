
import {Iteration, IterationMap} from './Iteration'
/**
 * Move `I`'s position backwards
 * @param I to move
 * @param IMap to operate with another set of numbers
 * @returns [[Iteration]]
 * @example
 * ```ts
 * import {I} from 'ts-toolbelt'
 *
 * type i = I.IterationOf<'20'>
 *
 * type test0 = I.Pos<i>         // 20
 * type test1 = I.Pos<I.Prev<i>> // 19
 * ```
 */
export type Prev<I extends Iteration> =
    IterationMap[I[2]] // continues iterating
