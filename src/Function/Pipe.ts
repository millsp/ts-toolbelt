import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Head} from '../Tuple/Head'
import {Last} from '../Tuple/Last'
import {Format} from '../String/Format'
import {Return} from './Return'
import {Parameters} from './Parameters'

type PipeFn<Fns extends Function[], K extends keyof Fns> =
    Format<K & string, 'n'> extends 0
    ? Fns[K] // If first item, do nothing to it. Otherwise, pipe them:
    : (arg: Return<Fns[Pos<Prev<IterationOf<K & string>>>]>) =>
        Return<Fns[Pos<IterationOf<K & string>>]>

/** Compute what the input of **`Pipe`** should be
 * @param Fns to pipe
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `pipe`
 * /// `Piper` will check for input & `Piped` the output
 * declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Pipe<Fns>
 * ```
 */
export type Piper<Fns extends Function[]> = {
    [K in keyof Fns]: PipeFn<Fns, K>
}

/** Pipe **`Function`**s together
 * @param Fns to pipe
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `pipe`
 * /// `Piper` will check for input & `Piped` the output
 * declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Pipe<Fns>
 * ```
 */
export type Pipe<Fns extends Function[]> =
    (...args: Parameters<Head<Fns>>) => Return<Last<Fns>>
