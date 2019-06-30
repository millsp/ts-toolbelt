import {Tail} from './Tail'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from '../Number/_Internal'
import {Key} from '../Iteration/Key'
import {Way} from '../_Internal'
import {Pop} from './Pop'

type DropForth<T extends any[], N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: DropForth<Tail<T>, N, Next<I>>
    1: T
}[
    N extends Key<I>
    ? 1
    : 0
]

type DropBack<T extends any[], N extends Nbr, I extends Iteration = IterationOf<'0'>> = {
    0: DropBack<Pop<T>, N, Next<I>>
    1: T
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Remove **`N`** entries out of **`T`**
 * @param T to remove from
 * @param N to remove out
 * @param way to remove from end (?='->')
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Drop<T extends any[], N extends Nbr, way extends Way = '->'> = {
    '->': DropForth<T, N>
    '<-': DropBack<T, N>
}[way] extends infer X
? Cast<X, any[]>
: never
