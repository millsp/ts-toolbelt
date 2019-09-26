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
import {Or} from '../Boolean/Or'
import {Extends} from '../Any/Extends'
import {Tuple} from '../Tuple/Tuple'

type ComposeFnSync<Fns extends Tuple<Function>, K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? Fns[K] // If mapped type reached the end
    : Function<[ // handling unknown generics, waiting for proposal
        Return<Fns[Pos<Next<IterationOf<K & string>>>]> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

type ComposeFnAsync<Fns extends Tuple<Function>, K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? PromiseOf<Fns[K]> // If mapped type reached the end
    : Function<[ // handling unknown generics, waiting for proposal
        PromiseOf<Return<Fns[Pos<Next<IterationOf<K & string>>>]>> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/** Compute what the input of **`Compose`** should be
 * @param Fns to compose
 * @param mode sync/async (?=`'sync'`)
 * @example
 * ```ts
 * ```
 */
export type Composer<Fns extends Tuple<Function>, mode extends Mode = 'sync'> = {
    'sync' : {[K in keyof Fns]: ComposeFnSync<Fns, K>},
    'async': {[K in keyof Fns]: ComposeFnAsync<Fns, K>}
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
export type Compose<Fns extends Tuple<Function>, mode extends Mode = 'sync'> = {
    'sync' : (...args: Parameters<Last<Fns>>) => Return<Head<Fns>>
    'async': (...args: Parameters<Last<Fns>>) => Promise<PromiseOf<Return<Head<Fns>>>>
}[mode]
