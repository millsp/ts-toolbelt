import {Mode, Input} from './_Internal'
import {PipeMultiSync} from './Pipe/Multi/Sync'
import {PipeMultiAsync} from './Pipe/Multi/Async'
import {PipeListSync} from './Pipe/List/Sync'
import {PipeListAsync} from './Pipe/List/Async'
import {Function} from './Function'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {Last} from '../List/Last'
import {Prev} from '../Iteration/Prev'
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
type PipeFnSync<Fns extends List<Function>, K extends keyof Fns> =
    K extends '0'
    ? Fns[K] // If first item, do nothing to it. Otherwise, pipe them:
    : Function<[ // handling unknown generics, waiting for proposal
        Return<Fns[Pos<Prev<IterationOf<K & string>>>]> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/**
@hidden
*/
type PipeFnAsync<Fns extends List<Function>, K extends keyof Fns> =
    K extends '0'
    ? PromiseType<Fns[K]> // If first item, do nothing to it. Otherwise, pipe them:
    : Function<[ // handling unknown generics, waiting for proposal
        PromiseType<Return<Fns[Pos<Prev<IterationOf<K & string>>>]>> extends infer X
        ? {1: any, 0: X}[Or<Extends<unknown, X>, Extends<unknown[], X>>]
        : never
    ], Return<Fns[Pos<IterationOf<K & string>>]>
    >

/**
Compute what the input of [[Pipe]] should be
@param Fns to pipe
@param mode (?=`'sync'`) sync/async
@example
```ts
```
*/
export type Piper<Fns extends List<Function>, mode extends Mode = 'sync'> = {
    'sync' : {[K in keyof Fns]: PipeFnSync<Fns, K>}
    'async': {[K in keyof Fns]: PipeFnAsync<Fns, K>}
}[mode]

/**
Pipe [[Function]]s together
@param Fns to pipe
@param mode (?=`'sync'`) sync/async
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `pipe`
/// `Piper` will check for input & `Piped` the output
declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Piped<Fns>

const a = (a1: number) => `${a1}`
const b = (b1: string) => [b1]
const c = (c1: string[]) => [c1]

pipe(a, b, c)(42)

/// And if you are looking for an async `pipe` type
declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns, 'async'>): F.Piped<Fns, 'async'>

const a = async (a1: number) => `${a1}`
const b = async (b1: string) => [b1]
const c = async (c1: string[]) => [c1]

await pipe(a, b, c)(42)
```
*/
export type Piped<Fns extends List<Function>, mode extends Mode = 'sync'> = {
    'sync' : (...args: Parameters<Head<Fns>>) => Return<Last<Fns>>
    'async': (...args: Parameters<Head<Fns>>) => Promise<PromiseType<Return<Last<Fns>>>>
}[mode]

/**
Pipe [[Function]]s together
@param mode (?=`'sync'`) sync/async (this depends on your implementation)
@param input (?=`'multi'`) whether you want to take a list or multiple parameters
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `pipe`:
declare const pipe: F.Pipe

const a = (a1: number) => `${a1}`
const b = (b1: string) => [b1]
const c = (c1: string[]) => [c1]

pipe(a, b, c)(42)

/// And if you are looking for an async `pipe` type:
declare const pipe: F.Pipe<'async'>

const a = async (a1: number) => `${a1}`
const b = async (b1: string) => [b1]
const c = async (c1: string[]) => [c1]

await pipe(a, b, c)(42)
```
*/
export type Pipe<mode extends Mode = 'sync', input extends Input = 'multi'> = IntersectOf<{
    'sync' : {
        'multi': PipeMultiSync
        'list' : PipeListSync
    }
    'async': {
        'multi': PipeMultiAsync
        'list' : PipeListAsync
    }
}[mode][input]> // `IntersectOf` in case of unions
