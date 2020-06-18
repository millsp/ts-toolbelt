import {Test, F, A} from '../src/index'

const {checks, check} = Test

//////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

const fn = (a: string, b: number, c: object) => true

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Function<[string, number, object], boolean>,    typeof fn,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPOSE

// sync ----------------------------------------------------------------------------------

declare function compozeSync<Fns extends F.Function[]>(...args: F.Composer<Fns>): F.Composed<Fns>
declare const composeSync: F.Compose<'sync'>

const compozedSync = compozeSync(
    (message: string)                   => false,                   // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    <T>(generic: T)                     => generic,                 // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
)

const composedSync = composeSync(
    (message: string)                   => false,                   // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    <T>(generic: T)                     => generic,                 // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof compozedSync),    (name: string, age: number) => boolean,     Test.Pass>(),
    check<(typeof composedSync),    (name: string, age: number) => boolean,     Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare function compozeAsync<Fns extends F.Function[]>(...args: F.Composer<Fns, 'async'>): F.Composed<Fns, 'async'>
declare const composeAsync: F.Compose<'async'>

const compozedAsync = compozeAsync(
    (message: string)                         => false,                   // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (name: string, age: number)         => ({name, age}),           // receive parameters
)

const composedAsync = composeAsync(
    (message: string)                         => false,                   // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof compozedAsync),   (name: string, age: number) => Promise<boolean>,    Test.Pass>(),
    check<(typeof composedAsync),   (name: string, age: number) => Promise<boolean>,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

declare function curry<Fn extends F.Function>(f: Fn): F.Curry<Fn>

const __ = {} as A.x

const toCurry = (name: string, age: number, single: true, nicknames: string) => true
const curried = curry(toCurry)

const test00: boolean = curried(__, 26)(__, true, 'JJ')('Jane') // boolean
const test01: boolean = curried('Jane', 26, true, __)('JJ')     // boolean

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<F.Parameters<typeof fn>,    [string, number, object],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<F.Length<typeof fn>,                          3,          Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any>,         1 | 2,      Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any, 's'>,    '1' | '2',  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PIPE

// sync ----------------------------------------------------------------------------------

declare function pypeSync<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Piped<Fns>
declare const pipeSync: F.Pipe<'sync'>

const pypedSync = pypeSync(
    (name: string, age: number)         => ({name, age}),           // receive parameters
    <T>(generic: T)                     => generic,                 // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => false,                   // receive previous return
)

const pipedSync = pipeSync(
    (name: string, age: number)           => ({name, age}),         // receive parameters
    <T>(generic: T)                     => generic,                 // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => false,                   // receive previous return
)

checks([
    check<(typeof pypedSync),   (name: string, age: number) => boolean,  Test.Pass>(),
    check<(typeof pipedSync),   (name: string, age: number) => boolean,  Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare function pypeAsync<Fns extends F.Function[]>(...args: F.Piper<Fns, 'async'>): F.Piped<Fns, 'async'>
declare const pipeAsync: F.Pipe<'async'>

const pypedAsync = pypeAsync(
    (name: string, age: number)               => ({name, age}),           // receive parameters
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                         => false,                   // receive previous return
)

const pipedAsync = pipeAsync(
    (name: string, age: number)               => ({name, age}),           // receive parameters
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                         => false,                   // receive previous return
)

checks([
    check<(typeof pypedAsync),   (name: string, age: number) => Promise<boolean>,   Test.Pass>(),
    check<(typeof pipedAsync),   (name: string, age: number) => Promise<boolean>,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISIFY

checks([
    check<F.Promisify<(typeof fn)>,                      (a: string, b: number, c: object) => Promise<boolean>,     Test.Pass>(),
    check<F.Promisify<(a: string) => A.Promise<boolean>>,  (a: string) => Promise<boolean>,                           Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RETURN

checks([
    check<F.Return<typeof fn>,    boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNCURRY

// checks([
//     check<F.UnCurry<typeof curried>,    typeof FN,  Test.Pass>(),
// ])
