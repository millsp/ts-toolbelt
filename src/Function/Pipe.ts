import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Head} from '../Tuple/Head'
import {Last} from '../Tuple/Last'
import {Return} from './Return'
import {Parameters} from './Parameters'
import {Mode} from './_Internal'
import {PromiseOf} from '../Class/PromiseOf'
import {Or} from '../Boolean/Or'
import {Extends} from '../Any/Extends'
import {Tuple} from '../Tuple/Tuple'

type PipeFnSync<Fns extends Tuple<Function>, K extends keyof Fns> =
    K extends '0'
    ? Fns[K] // If first item, do nothing to it. Otherwise, pipe them:
    : Function<[ // handling unknown generics, waiting for proposal
        Return<Fns[Pos<Prev<IterationOf<K & string>>>]> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

type PipeFnAsync<Fns extends Tuple<Function>, K extends keyof Fns> =
    K extends '0'
    ? PromiseOf<Fns[K]> // If first item, do nothing to it. Otherwise, pipe them:
    : Function<[ // handling unknown generics, waiting for proposal
        PromiseOf<Return<Fns[Pos<Prev<IterationOf<K & string>>>]>> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/** Compute what the input of **`Pipe`** should be
 * @param Fns to pipe
 * @param mode sync/async (?=`'sync'`)
 * @example
 * ```ts
 * ```
 */
export type Piper<Fns extends Tuple<Function>, mode extends Mode = 'sync'> = {
    'sync' : {[K in keyof Fns]: PipeFnSync<Fns, K>}
    'async': {[K in keyof Fns]: PipeFnAsync<Fns, K>}
}[mode]

/** Pipe **`Function`**s together
 * @param Fns to pipe
 * @param mode sync/async (?=`'sync'`)
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `pipe`
 * /// `Piper` will check for input & `Piped` the output
 * declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Pipe<Fns>
 *
 * const a = (a1: number) => `${a1}`
 * const b = (b1: string) => [b1]
 * const c = (c1: string[]) => [c1]
 *
 * pipe(a, b, c)(42)
 *
 * /// And if you are looking for an async `pipe` type
 * declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns, 'async'>): F.Pipe<Fns, 'async'>
 *
 * const a = async (a1: number) => `${a1}`
 * const b = async (b1: string) => [b1]
 * const c = async (c1: string[]) => [c1]
 *
 * await pipe(a, b, c)(42)
 * ```
 */
export type Pipe<Fns extends Tuple<Function>, mode extends Mode = 'sync'> = {
    'sync' : (...args: Parameters<Head<Fns>>) => Return<Last<Fns>>
    'async': (...args: Parameters<Head<Fns>>) => Promise<PromiseOf<Return<Last<Fns>>>>
}[mode]
