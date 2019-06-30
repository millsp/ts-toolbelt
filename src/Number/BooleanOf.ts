import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {True, False} from '../Boolean/Boolean'

export type _BooleanOf<N extends Iteration> = {
    '-': True
    '+': True
    '0': False
}[N[4]]

/** Transform a **number** into a **`boolean`**
 * @param N to transform
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.BooleanOf<'0'>   // false
 * type test1 = N.BooleanOf<'-10'> // true
 * ```
 */
export type BooleanOf<N extends Nbr> =
    _BooleanOf<IterationOf<N>>
