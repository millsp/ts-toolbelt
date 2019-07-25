import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {Last} from '../Tuple/Last'
import {Format} from '../String/Format'
import {Length} from '../Tuple/Length'
import {Tail} from '../Tuple/Tail'
import {Next} from '../Iteration/Next'
import {Head} from '../Tuple/Head'
import {Return} from './Return'
import {Parameters} from './Parameters'

type ComposeFn<Fns extends Function[], K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? Fns[K] // If mapped type reached the end
    : (arg: Return<Fns[Pos<Next<IterationOf<K & string>>>]>) =>
        Return<Fns[Pos<IterationOf<K & string>>]>

/** Compute what the input of **`Compose`** should be
 * @param Fns to compose
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Compose` the output
 * declare function compose<Fns extends F.Arrow[]>(...args: F.Composer<Fns>): F.Compose<Fns>
 * ```
 */
export type Composer<Fns extends Function[]> = {
    [K in keyof Fns]: ComposeFn<Fns, K>
}

/** Compose **`Function`**s together
 * @param Fns to compose
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Compose` the output
 * declare function compose<Fns extends F.Arrow[]>(...args: F.Composer<Fns>): F.Compose<Fns>
 * ```
 */
export type Compose<Fns extends Function[]> =
    (...args: Parameters<Last<Fns>>) => Return<Head<Fns>>
