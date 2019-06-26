import {Arrow} from './Arrow'
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

type ComposeItem<Fns extends Arrow[], K extends keyof Fns> =
    Length<Tail<Fns>> extends NumberOf<K>
    ? Fns[K] // If mapped type reached the end
    : (arg: ReturnOf<Fns[Pos<Next<IterationOf<K>>>]>) =>
        ReturnOf<Fns[Pos<IterationOf<K>>]>

/** Compute what the input of **`Compose`** should be
 * @param Fns to compose
 * @example
 * ```ts
 * /// If you are looking for creating types for compose
 * /// `Composer` will check for input & `Composed` output
 * declare function compose<Fns extends any[]>(...args: Composer<Fns>): Composed<Fns>
 * ```
 */
export type Composer<Fns extends Arrow[]> = {
    [K in keyof Fns]: ComposeItem<Fns, K>
}

/** Compose **`Function`**s together like **`compose()`**
 * @param Fns to compose
 * @returns **`Function`**
 * @example
 * ```ts
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Composed` output
 * declare function compose<Fns extends any[]>(...args: Composer<Fns>): Composed<Fns>
 * ```
 */
export type Composed<Fns extends Arrow[]> =
    (...args: ParamsOf<Last<Fns>>) => ReturnOf<Head<Fns>>
