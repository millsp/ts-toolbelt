import {Mode, Input} from './_Internal'
import {ComposeMultiSync} from './Compose/Multi/Sync'
import {ComposeMultiAsync} from './Compose/Multi/Async'
import {ComposeListSync} from './Compose/List/Sync'
import {ComposeListAsync} from './Compose/List/Async'
import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {Last} from '../List/Last'
import {Format} from '../String/Format'
import {Length} from '../List/Length'
import {Tail} from '../List/Tail'
import {Next} from '../Iteration/Next'
import {Head} from '../List/Head'
import {Return} from './Return'
import {Parameters} from './Parameters'
import {PromiseType} from '../Any/PromiseType'
import {Or} from '../Boolean/Or'
import {Extends} from '../Any/Extends'
import {List} from '../List/List'
import {IntersectOf} from '../Union/IntersectOf'

/**
@hidden
*/
type ComposeFnSync<Fns extends List<Function>, K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? Fns[K] // If mapped type reached the end
    : Function<[ // handling unknown generics, waiting for proposal
        Return<Fns[Pos<Next<IterationOf<K & string>>>]> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/**
@hidden
*/
type ComposeFnAsync<Fns extends List<Function>, K extends keyof Fns> =
    Length<Tail<Fns>> extends Format<K & string, 'n'>
    ? PromiseType<Fns[K]> // If mapped type reached the end
    : Function<[ // handling unknown generics, waiting for proposal
        PromiseType<Return<Fns[Pos<Next<IterationOf<K & string>>>]>> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/**
Compute what the input of [[Compose]] should be
@param Fns to compose
@param mode (?=`'sync'`) sync/async
@example
```ts
```
*/
export type Composer<Fns extends List<Function>, mode extends Mode = 'sync'> = {
    'sync' : {[K in keyof Fns]: ComposeFnSync<Fns, K>},
    'async': {[K in keyof Fns]: ComposeFnAsync<Fns, K>}
}[mode]

/**
Compose [[Function]]s together
@param Fns to compose
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `compose`
/// `Composer` will check for input & `Composed` the output
declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns>): F.Composed<Fns>

const a = (a1: number) => `${a1}`
const c = (c1: string[]) => [c1]
const b = (b1: string) => [b1]

compose(c, b, a)(42)

/// And if you are looking for an async `compose` type
declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns, 'async'>): F.Composed<Fns, 'async'>

const a = async (a1: number) => `${a1}`
const b = async (b1: string) => [b1]
const c = async (c1: string[]) => [c1]

await compose(c, b, a)(42)
*/
export type Composed<Fns extends List<Function>, mode extends Mode = 'sync'> = {
    'sync' : (...args: Parameters<Last<Fns>>) => Return<Head<Fns>>
    'async': (...args: Parameters<Last<Fns>>) => Promise<PromiseType<Return<Head<Fns>>>>
}[mode]

/**
Compose [[Function]]s together
@param mode  (?=`'sync'`)    sync/async (this depends on your implementation)
@param input (?=`'multi'`)   whether you want it to take a list or parameters
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `compose`
/// `Composer` will check for input & `Compose` the output
declare const compose: F.Compose

const a = (a1: number) => `${a1}`
const c = (c1: string[]) => [c1]
const b = (b1: string) => [b1]

compose(c, b, a)(42)

/// And if you are looking for an async `compose` type
declare const compose: F.Compose<'async'>

const a = async (a1: number) => `${a1}`
const b = async (b1: string) => [b1]
const c = async (c1: string[]) => [c1]

await compose(c, b, a)(42)
*/
export type Compose<mode extends Mode = 'sync', input extends Input = 'multi'> = IntersectOf<{
    'sync' : {
        'multi': ComposeMultiSync
        'list' : ComposeListSync
    }
    'async': {
        'multi': ComposeMultiAsync
        'list' : ComposeListAsync
    }
}[mode][input]> // `IntersectOf` in case of unions
