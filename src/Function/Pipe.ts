import {Arrow} from './Arrow'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Head} from '../Tuple/Head'
import {Last} from '../Tuple/Last'
import {NumberOf} from '../String/NumberOf'
import {ReturnOf} from './ReturnOf'
import {ParamsOf} from './ParamsOf'

type PipeItem<Fns extends Arrow[], K extends keyof Fns> =
    NumberOf<K> extends 0
    ? Fns[K] // If it's the first item, do nothing to it. Otherwise, pipe them:
    : (arg: ReturnOf<Fns[Pos<Prev<IterationOf<K>>>]>) =>
        ReturnOf<Fns[Pos<IterationOf<K>>]>

/** Compute what the input of **`Pipe`** should be
 * @param Fns to pipe
 * @example
 */
export type Piper<Fns extends Arrow[]> = {
    [K in keyof Fns]: PipeItem<Fns, K>
}

/** Pipe **`Function`**s together like **`pipe()`**
 * @param Fns to pipe
 * @returns **`Function`**
 * @example
 */
export type Pipe<Fns extends Arrow[]> = (...args: Piper<Fns>) =>
    (...args: ParamsOf<Head<Fns>>) => ReturnOf<Last<Fns>>
