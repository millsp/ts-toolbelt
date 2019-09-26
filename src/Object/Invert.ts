import {Record} from './Record'
import {Index} from '../Any/Index'
import {IntersectOf} from '../Union/IntersectOf'
import {Compute} from '../Any/Compute'

/** Swaps the keys and values of an **`object`** (if applicable)
 * @param O
 * @returns **`object`**
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt'
 *
 * enum E {
 *     A = 'Av',
 *     B = 'Bv',
 *     C = 'Cv',
 *     D = 'Dv',
 *     X = 1
 * }
 *
 * type O = {
 *     A: 'Av'
 *     B: 'Bv'
 *     C: 'Cv'
 *     D: 'Dv'
 *     X: 1
 * }
 *
 * type test0 = O.Invert<typeof E>
 * type test1 = O.Invert<O>
 * ```
 */
export type Invert<O extends Record<keyof O, Index>> =
  Compute<IntersectOf<
    { // swaps the key and the value
      [K in keyof O]: Record<O[K], K>
    }[keyof O]
  >>
