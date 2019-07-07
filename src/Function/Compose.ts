import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {Last} from '../Tuple/Last'
import {NumberOf} from '../String/NumberOf'
import {Length} from '../Tuple/Length'
import {Tail} from '../Tuple/Tail'
import {Next} from '../Iteration/Next'
import {Head} from '../Tuple/Head'
import {ReturnOf} from './ReturnOf'
import {ParamsOf} from './ParamsOf'

type ComposeFn<Fns extends Function[], K extends keyof Fns> =
    Length<Tail<Fns>> extends NumberOf<K & string>
    ? Fns[K] // If mapped type reached the end
    : (arg: ReturnOf<Fns[Pos<Next<IterationOf<K & string>>>]>) =>
        ReturnOf<Fns[Pos<IterationOf<K & string>>]>

/** Compute what the input of **`Compose`** should be
 * @param Fns to compose
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Composed` output
 * declare function compose<Fns extends F.Arrow[]>(...args: F.Composer<Fns>): F.Composed<Fns>
 * ```
 */
export type Composer<Fns extends Function[]> = {
    [K in keyof Fns]: ComposeFn<Fns, K>
}

/** Compose **`Function`**s together like **`compose()`**
 * @param Fns to compose
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Composed` output
 * declare function compose<Fns extends F.Arrow[]>(...args: F.Composer<Fns>): F.Composed<Fns>
 * ```
 */
export type Composed<Fns extends Function[]> =
    (...args: ParamsOf<Last<Fns>>) => ReturnOf<Head<Fns>>
