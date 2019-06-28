import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {Equals} from '../Any/Equals'
import {Key} from '../Iteration/Key'
import {Cast} from '../Any/Cast'

export type _BooleanOf<N extends Iteration> =
    Key<N> extends '0'
    ? false
    : string extends Key<N>
      ? boolean
      : true

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
    _BooleanOf<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
