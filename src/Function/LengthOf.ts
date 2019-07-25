import {Arrow} from './Arrow'
import {ParamsOf} from './ParamsOf'

/** Extract arguments length from a **`Function`**
 * @param F to extract from
 * @returns **`number`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * const fn = (a1: any, a2: any) => {}
 *
 * type test0 = F.LengthOf<typeof fn>                         // 2
 *
 * type test1 = F.LengthOf<(a1?: any) => any>                 // 0 | 1
 *
 * type test2 = F.LengthOf<(...a: any[]) => any>              // number
 * ```
 */
export type LengthOf<Fn extends Arrow> = ParamsOf<Fn>['length']
