import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {Equals} from '../Any/Equals'
import {Key} from '../Iteration/Key'
import {Cast} from '../Any/Cast'

export type _BooleanOf<N extends Iteration> =
    Equals<Key<N>, string> extends true
    ? boolean
    : Key<N> extends '0'
      ? false
      : true

/** Transform a **number** into a **`boolean`**
 * @param N to transform
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * ```
 */
export type BooleanOf<N extends Nbr> =
    _BooleanOf<IterationOf<N>> extends infer X
    ? Cast<X, boolean>
    : never
