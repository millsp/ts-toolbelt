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
import {Mode} from './_Internal'
import {PromiseOf} from '../Class/PromiseOf'

type ComposeFnSync<Fns extends Function[], K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? Fns[K] // If mapped type reached the end
    : (arg: Return<Fns[Pos<Next<IterationOf<K & string>>>]>) =>
        Return<Fns[Pos<IterationOf<K & string>>]>

type ComposeFnAsync<Fns extends Function[], K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? Fns[K] // If mapped type reached the end
    : (arg: PromiseOf<Return<Fns[Pos<Next<IterationOf<K & string>>>]>>) =>
        Return<Fns[Pos<IterationOf<K & string>>]>

/** Compute what the input of **`Compose`** should be
 * @param Fns to compose
 * @param mode sync/async (?=`'sync'`)
 * @example
 * ```ts
 * ```
 */
export type Composer<Fns extends Function[], mode extends Mode = 'sync'> = {
    'sync' : {[K in keyof Fns]: K extends keyof any[] ? Fns[K] : ComposeFnSync<Fns, K>},
    'async': {[K in keyof Fns]: K extends keyof any[] ? Fns[K] : ComposeFnAsync<Fns, K>}
}[mode]

/** Compose **`Function`**s together
 * @param Fns to compose
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `compose`
 * /// `Composer` will check for input & `Compose` the output
 * declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns>): F.Compose<Fns>
 *
 * const a = (a1: number) => `${a1}`
 * const c = (c1: string[]) => [c1]
 * const b = (b1: string) => [b1]
 *
 * compose(c, b, a)(42)
 *
 * /// And if you are looking for an async `pipe` type
 * declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns, 'async'>): F.Composer<Fns, 'async'>
 *
 * const a = async (a1: number) => `${a1}`
 * const b = async (b1: string) => [b1]
 * const c = async (c1: string[]) => [c1]
 *
 * await compose(c, b, a)(42)
 */
export type Compose<Fns extends Function[], mode extends Mode = 'sync'> = {
    'sync' : (...args: Parameters<Last<Fns>>) => Return<Head<Fns>>
    'async': (...args: Parameters<Last<Fns>>) => Promise<Return<Head<Fns>>>
}[mode]
